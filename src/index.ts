import type { UnicornSceneOptions, UnicornStudioScene, UnicornStudioSDK } from './types.js';
import { SDK_VERSION } from './version.js';

export * from './types.js';
export { SDK_VERSION };

export const SDK_URL = `https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v${SDK_VERSION}/dist/unicornStudio.umd.js`;

const loads = new Map<string, Promise<UnicornStudioSDK>>();

// The HTML embed snippet leaves a `{ isInitialized }` stub on the global while its script loads.
const loadedSdk = () => {
  const sdk = (window as { UnicornStudio?: UnicornStudioSDK }).UnicornStudio;
  return sdk?.addScene ? sdk : null;
};

/**
 * Loads the SDK once per page. A page runs one SDK: when one is already there, from an
 * embed snippet or an earlier call, it is reused and `url` is ignored.
 */
export function loadSdk(url = SDK_URL): Promise<UnicornStudioSDK> {
  const sdk = loadedSdk();
  if (sdk) return Promise.resolve(sdk);

  let load = loads.get(url);
  if (!load) {
    load = new Promise<UnicornStudioSDK>((resolve, reject) => {
      const fail = () => {
        loads.delete(url);
        reject(new Error(`Failed to load the Unicorn Studio SDK from ${url}`));
      };
      const script = document.createElement('script');
      script.src = url;
      script.onload = () => {
        const sdk = loadedSdk();
        if (sdk) resolve(sdk);
        else fail();
      };
      script.onerror = fail;
      document.head.appendChild(script);
    });
    loads.set(url, load);
  }
  return load;
}

// Options a live scene can't take a new value for: changing one recreates the scene.
const INIT_OPTIONS = [
  'projectId',
  'jsonFilePath',
  'sdkUrl',
  'scale',
  'dpi',
  'fps',
  'lazyLoad',
  'production',
  'fixed',
  'altText',
  'ariaLabel',
] as const;

export interface UnicornSceneHandle {
  /** The live scene, or `null` while it loads. */
  readonly scene: UnicornStudioScene | null;
  update(options: UnicornSceneOptions): void;
  destroy(): void;
}

/**
 * Renders a scene into `element` and keeps it in step with `options`. This is what every
 * framework component wraps, and it is a Svelte action as is: `use:mountScene={options}`.
 */
export function mountScene(element: HTMLElement, options: UnicornSceneOptions): UnicornSceneHandle {
  let scene: UnicornStudioScene | null = null;
  let unsubscribe: (() => void) | undefined;
  // What the live scene currently has, so sync() sends it only what changed.
  let applied: { paused: boolean; preset?: string; variables?: string };
  // Bumped by every create and teardown, so a create that finishes late knows it was superseded.
  let run = 0;

  // Without WebGL2 the SDK resolves a fallback scene that has no variable or preset methods,
  // which is why those calls are optional here and in create().
  const sync = () => {
    if (!scene) return;
    const paused = !!options.paused;
    if (paused !== applied.paused) scene.paused = paused;

    const presetChanged = !!options.preset && options.preset !== applied.preset;
    if (presetChanged) scene.setPreset?.(options.preset!);

    // A preset resets the values it covers, so explicit variables go back on top of it.
    const variables = JSON.stringify(options.variables);
    if (options.variables && (presetChanged || variables !== applied.variables)) {
      scene.setVariables?.(options.variables);
    }
    applied = { paused, preset: options.preset, variables };
  };

  const create = async () => {
    const current = ++run;
    const { projectId, jsonFilePath, sdkUrl, variables, preset, lazyLoad = true, production = false } = options;
    applied = { paused: false, preset, variables: JSON.stringify(variables) };
    try {
      if (!projectId && !jsonFilePath) throw new Error('UnicornScene needs a projectId or a jsonFilePath.');
      const sdk = await loadSdk(sdkUrl);
      if (current !== run) return;
      const created = await sdk.addScene({
        element,
        projectId,
        filePath: jsonFilePath,
        scale: options.scale,
        dpi: options.dpi,
        fps: options.fps,
        lazyLoad,
        production,
        fixed: options.fixed,
        altText: options.altText,
        ariaLabel: options.ariaLabel,
        initialVariables: variables,
        initialPreset: preset,
      });
      if (current !== run) return created.destroy();
      scene = created;
      unsubscribe = scene.onVariableChange?.((...change) => options.onVariableChange?.(...change));
      // Catches up on options that changed while the scene was loading.
      sync();
      options.onLoad?.(scene);
    } catch (error) {
      if (current === run) options.onError?.(error instanceof Error ? error : new Error(String(error)));
    }
  };

  const teardown = () => {
    run++;
    unsubscribe?.();
    unsubscribe = undefined;
    scene?.destroy();
    scene = null;
  };

  create();

  return {
    get scene() {
      return scene;
    },
    update(next) {
      const previous = options;
      options = next;
      if (INIT_OPTIONS.some(key => previous[key] !== next[key])) {
        teardown();
        create();
      } else {
        sync();
      }
    },
    destroy: teardown,
  };
}
