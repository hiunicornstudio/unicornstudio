# unicornstudio

The official [Unicorn Studio](https://www.unicorn.studio) components for React, Next.js, Vue and Svelte.

```bash
npm install unicornstudio
```

The package version is the [SDK](https://github.com/hiunicornstudio/unicornstudio.js) version it loads: `unicornstudio@2.5.2` runs SDK v2.5.2.

## React

```tsx
import UnicornScene from 'unicornstudio/react';

export default function Hero() {
  return <UnicornScene projectId="YOUR_PROJECT_ID" width="100%" height={480} />;
}
```

## Next.js

```tsx
import UnicornScene from 'unicornstudio/next';
```

The same component as `unicornstudio/react`. It is a Client Component, so it can be rendered from a Server Component directly.

## Vue

```vue
<script setup>
import UnicornScene from 'unicornstudio/vue';
</script>

<template>
  <UnicornScene project-id="YOUR_PROJECT_ID" width="100%" :height="480" />
</template>
```

## Svelte

```svelte
<script>
  import UnicornScene from 'unicornstudio/svelte';
</script>

<UnicornScene projectId="YOUR_PROJECT_ID" width="100%" height={480} />
```

Works in Svelte 4 and 5. To put a scene on an element of your own, use the action instead:

```svelte
<script>
  import { unicornScene } from 'unicornstudio/svelte';
</script>

<section use:unicornScene={{ projectId: 'YOUR_PROJECT_ID' }} />
```

## Any other framework

```js
import { mountScene } from 'unicornstudio';

const handle = mountScene(element, { projectId: 'YOUR_PROJECT_ID' });
handle.update({ projectId: 'YOUR_PROJECT_ID', paused: true });
handle.destroy();
```

`mountScene` only touches the DOM when called, so the package is safe to import during a server render.

## Options

Every component takes these, and they are the options object for `mountScene`.

| Option         | Type      | Default       |                                                                              |
| -------------- | --------- | ------------- | ---------------------------------------------------------------------------- |
| `projectId`    | `string`  |               | Embed ID of a published scene. Use this or `jsonFilePath`.                   |
| `jsonFilePath` | `string`  |               | URL of a self-hosted scene JSON export.                                      |
| `scale`        | `number`  | scene setting | Rendering scale, 0.25-1. Lower is faster.                                    |
| `dpi`          | `number`  | scene setting | Pixel ratio.                                                                 |
| `fps`          | `number`  | scene setting | Frames per second.                                                           |
| `lazyLoad`     | `boolean` | `true`        | Waits to initialize until the scene scrolls into view.                       |
| `production`   | `boolean` | `false`       | Serves scene data from the edge CDN. Turn on for scenes published in production mode. |
| `fixed`        | `boolean` | automatic     | Treats the scene as a fixed-position element.                                |
| `altText`      | `string`  |               | Text inside the `<canvas>`, for SEO.                                         |
| `ariaLabel`    | `string`  |               | `aria-label` of the `<canvas>`.                                              |
| `paused`       | `boolean` | `false`       | Pauses the scene.                                                            |
| `variables`    | `object`  |               | Values for the scene's published variables.                                  |
| `preset`       | `string`  |               | Published preset ID or name. `variables` override it.                        |
| `sdkUrl`       | `string`  | jsDelivr      | Loads the SDK from your own URL instead, for self-hosting or a strict CSP.   |

`paused`, `variables` and `preset` sync to the live scene when they change. Changing any other option recreates the scene.

A page runs one SDK. If one is already loaded, from an HTML embed snippet for example, the components use it and `sdkUrl` has no effect.

The components also take `width` and `height` (a number is pixels, default `100%`) and a `placeholder` that shows until the scene loads and when it fails to.

|                  | React / Next.js                                    | Vue                               | Svelte                          |
| ---------------- | -------------------------------------------------- | --------------------------------- | ------------------------------- |
| Loaded           | `onLoad(scene)`                                    | `@load`                           | `onLoad(scene)`                 |
| Failed           | `onError(error)`                                   | `@error`                          | `onError(error)`                |
| Variable changed | `onVariableChange(name, value, values)`            | `@variable-change`                | `onVariableChange(...)`         |
| Placeholder      | `placeholder`: image URL or node                   | `placeholder` URL or `#placeholder` slot | `placeholder`: image URL |
| Scene object     | `sceneRef`                                         | `scene` on the template ref       | `bind:scene`                    |

## The scene object

For anything the options don't cover, use the scene itself. It is fully typed as `UnicornStudioScene`, and documented in the [SDK reference](https://github.com/hiunicornstudio/unicornstudio.js#public-api-reference).

```tsx
import { useRef } from 'react';
import UnicornScene, { type UnicornStudioScene } from 'unicornstudio/react';

function Hero() {
  const scene = useRef<UnicornStudioScene | null>(null);
  return (
    <>
      <UnicornScene projectId="YOUR_PROJECT_ID" sceneRef={scene} />
      <button onClick={() => scene.current?.getLayer('Logo')?.hide()}>Hide logo</button>
    </>
  );
}
```

The SDK resizes scenes with the window. After a layout change that doesn't resize the window, such as revealing a hidden container, call `scene.resize()`.

## Moving from unicornstudio-react

Change the import: `unicornstudio-react` becomes `unicornstudio/react`, and `unicornstudio-react/next` becomes `unicornstudio/next`. The props are the same, with these differences:

- The SDK loads from jsDelivr instead of being bundled into your app. Pass `sdkUrl` to self-host it.
- `scale`, `dpi` and `fps` default to the scene's published settings instead of `1`, `1.5` and `60`.
- A failed scene calls `onError` and shows the placeholder. No error message is rendered into the page.
- `production` defaults to `false`, as it does in the SDK. Pass `production` for scenes you publish in production mode.
- `onLoad` receives the scene.

## License

MIT for this package. The SDK it loads has [its own license](https://github.com/hiunicornstudio/unicornstudio.js#license).
