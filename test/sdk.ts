import { vi } from 'vitest';

export type FakeScene = ReturnType<typeof createScene>;

function createScene(options: Record<string, any>) {
  const scene = {
    options,
    destroyed: false,
    paused: false,
    destroy: () => void (scene.destroyed = true),
    setVariables: vi.fn(),
    setPreset: vi.fn(),
    emitVariableChange: (..._change: unknown[]) => {},
    onVariableChange: (callback: (...change: unknown[]) => void) => {
      scene.emitVariableChange = callback;
      return () => {};
    },
  };
  return scene;
}

/**
 * Stands in for the SDK. Test files swap it in for the bundled one with
 * `vi.mock('../sdk/unicornStudio.js', () => import('./sdk.js'))`.
 */
export const scenes: FakeScene[] = [];
export const live = () => scenes.filter(scene => !scene.destroyed);
export const addScene = vi.fn(async (options: Record<string, any>): Promise<any> => {
  if (options.projectId === 'missing') throw new Error('Error fetching data');
  scenes.push(createScene(options));
  return scenes.at(-1);
});

/** Waits out the core's dynamic import of the SDK, then the scene it creates. */
export const settle = async () => {
  await vi.dynamicImportSettled();
  await new Promise(resolve => setTimeout(resolve));
};
