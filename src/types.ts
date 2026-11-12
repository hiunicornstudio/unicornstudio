export interface UnicornVec2 {
  type: 'Vec2';
  x: number;
  y: number;
}

export interface UnicornVec3 {
  type: 'Vec3';
  x: number;
  y: number;
  z: number;
}

/** Colors are hex strings and textures are URL strings. */
export type UnicornVariableValue = number | boolean | string | UnicornVec2 | UnicornVec3;

export type UnicornVariables = Record<string, UnicornVariableValue>;

export interface UnicornVariableDefinition {
  id: string;
  name: string;
  type: string;
  defaultValue?: UnicornVariableValue;
  description?: string;
  validation?: { min?: number; max?: number; step?: number };
}

export interface UnicornVariableBinding {
  layerId: string;
  kind: 'prop' | 'source' | 'texture';
  target: string;
  enabled: boolean;
}

export interface UnicornVariableManifestEntry extends UnicornVariableDefinition {
  currentValue?: UnicornVariableValue;
  bindingCount: number;
  bindings: UnicornVariableBinding[];
}

export interface UnicornPreset {
  id: string;
  name: string;
  values?: UnicornVariables;
}

export interface UnicornLayerDescriptor {
  id: string;
  publicId?: string;
  name?: string;
  type?: string;
}

export interface UnicornLayer {
  hide(): UnicornLayer;
  show(): UnicornLayer;
  /** Model layers only. */
  onLoad?(callback: () => void): void;
}

export type UnicornVariableChangeCallback = (
  name: string,
  value: UnicornVariableValue,
  values: UnicornVariables
) => void;

/**
 * The scene object `UnicornStudio.addScene()` resolves with. In a browser without WebGL2 the
 * SDK resolves a fallback scene instead, which has only `element`, `destroy` and `getMouse`.
 */
export interface UnicornStudioScene {
  element: HTMLElement;
  paused: boolean;
  destroy(): void;
  /** Call after a layout change that doesn't resize the window, such as revealing a hidden container. */
  resize(): void;

  setVariable(name: string, value: UnicornVariableValue): UnicornStudioScene;
  setVariables(values: UnicornVariables): UnicornStudioScene;
  getVariable(name: string): UnicornVariableValue | undefined;
  getVariables(): UnicornVariables;
  getVariableDefinition(name: string): UnicornVariableDefinition | null;
  getVariableDefinitions(): UnicornVariableDefinition[];
  getVariableManifest(): UnicornVariableManifestEntry[];
  /** Returns an unsubscribe function. */
  onVariableChange(callback: UnicornVariableChangeCallback): () => void;

  getPresets(): UnicornPreset[];
  getPreset(idOrName: string): UnicornPreset | null;
  setPreset(idOrName: string): UnicornStudioScene;

  setProp(layerIdOrName: string, prop: string, value: unknown): UnicornStudioScene;
  setTexture(layerIdOrName: string, samplerName: string, value: string | object): UnicornStudioScene;
  getLayers(): UnicornLayerDescriptor[];
  getLayer(idOrName: string): UnicornLayer | null;
  /** `y` runs bottom to top. */
  getMouse(): { x: number; y: number; inBounds: boolean; moved: boolean };
}

export interface UnicornSceneOptions {
  /** Embed ID of a published scene. Use this or `jsonFilePath`. */
  projectId?: string;
  /** URL of a self-hosted scene JSON export. Use this or `projectId`. */
  jsonFilePath?: string;
  /** Loads the SDK from this URL instead of the pinned release on jsDelivr, for self-hosting. */
  sdkUrl?: string;
  /** Rendering scale, 0.25-1. Defaults to the scene's published setting. */
  scale?: number;
  /** Pixel ratio. Defaults to the scene's published setting. */
  dpi?: number;
  /** Frames per second. Defaults to the scene's published setting. */
  fps?: number;
  /** Waits to initialize until the scene scrolls into view. Defaults to `true`. */
  lazyLoad?: boolean;
  /** Serves scene data from the edge CDN. Defaults to `true`. */
  production?: boolean;
  /** Treats the scene as a fixed-position element. Detected automatically when omitted. */
  fixed?: boolean;
  altText?: string;
  ariaLabel?: string;
  paused?: boolean;
  /** Values for the scene's published variables, synced to the live scene when they change. */
  variables?: UnicornVariables;
  /** Published preset ID or name, synced to the live scene when it changes. `variables` override it. */
  preset?: string;
  onLoad?: (scene: UnicornStudioScene) => void;
  onError?: (error: Error) => void;
  onVariableChange?: UnicornVariableChangeCallback;
}

/** The `window.UnicornStudio` global. */
export interface UnicornStudioSDK {
  init(): Promise<UnicornStudioScene[]>;
  addScene(options: Record<string, unknown>): Promise<UnicornStudioScene>;
  destroy(): void;
  setScroll(scrollY: number): void;
  useNativeScroll(): void;
}
