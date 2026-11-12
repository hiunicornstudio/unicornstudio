import type { SvelteComponent } from 'svelte';
import type { UnicornSceneOptions, UnicornStudioScene } from '../index.js';

export type * from '../types.js';

export interface UnicornSceneProps extends UnicornSceneOptions {
  /** A number is pixels. Defaults to `100%`. */
  width?: number | string;
  /** A number is pixels. Defaults to `100%`. */
  height?: number | string;
  /** Image URL shown until the scene loads and when it fails. */
  placeholder?: string;
  /** The live scene, for `bind:scene`. */
  scene?: UnicornStudioScene | null;
}

export class UnicornScene extends SvelteComponent<UnicornSceneProps> {}
export default UnicornScene;

/** The action behind the component: `<div use:unicornScene={{ projectId }} />`. */
export { mountScene as unicornScene } from '../index.js';
