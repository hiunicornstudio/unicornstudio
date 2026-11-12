// A .svelte.ts file, so the test can drive props through the $state rune.
import { flushSync, mount, unmount } from 'svelte';
import { expect, test, vi } from 'vitest';
import SvelteScene, { unicornScene } from '../src/svelte/index.js';
import { mountScene } from '../src/index.js';
import { installSdk, settle } from './sdk.js';

test('Svelte: loads the scene, syncs prop changes, destroys on unmount', async () => {
  const sdk = installSdk();
  const onLoad = vi.fn();
  const props = $state({ projectId: 'a', width: 300, variables: { speed: 1 }, placeholder: '/still.png', onLoad });
  const component = mount(SvelteScene, { target: document.body, props });
  expect(document.querySelector('img')).not.toBeNull();
  expect(document.querySelector('div')!.style.width).toBe('300px');
  await settle();
  flushSync();

  expect(sdk.live()).toHaveLength(1);
  expect(onLoad).toHaveBeenCalledWith(sdk.live()[0]);
  expect(document.querySelector('img')).toBeNull();

  props.variables = { speed: 2 };
  flushSync();
  expect(sdk.scenes).toHaveLength(1);
  expect(sdk.live()[0].setVariables).toHaveBeenLastCalledWith({ speed: 2 });

  await unmount(component);
  expect(sdk.live()).toEqual([]);
});

test('Svelte: the action is the core mountScene', () => {
  expect(unicornScene).toBe(mountScene);
});
