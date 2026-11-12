<script>
  // Written in the Svelte 4 syntax, which Svelte 5 also runs, so one file serves both.
  import { mountScene } from '../index.js';

  export let width = '100%';
  export let height = '100%';
  /** Image URL shown until the scene loads and when it fails. */
  export let placeholder = undefined;
  export let onLoad = undefined;
  /** The live scene, for `bind:scene`. */
  export let scene = null;

  let loaded = false;

  const size = value => (typeof value === 'number' ? `${value}px` : value);

  // Every other prop is a scene option: see UnicornSceneOptions.
  $: options = {
    ...$$restProps,
    onLoad: created => {
      scene = created;
      loaded = true;
      onLoad?.(created);
    },
  };
</script>

<div use:mountScene={options} style:position="relative" style:width={size(width)} style:height={size(height)}>
  {#if placeholder && !loaded}
    <img
      src={placeholder}
      alt={$$restProps.altText ?? ''}
      style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover"
    />
  {/if}
</div>
