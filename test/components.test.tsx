import { act, createRef, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { createApp, h, nextTick, reactive, ref } from 'vue';
import NextScene from '../src/next.js';
import ReactScene from '../src/react.js';
import VueScene from '../src/vue.js';
import type { UnicornStudioScene } from '../src/index.js';
import { installSdk, settle } from './sdk.js';

(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;

let sdk: ReturnType<typeof installSdk>;
let host: HTMLElement;

beforeEach(() => {
  sdk = installSdk();
  host = document.body.appendChild(document.createElement('div'));
});
afterEach(() => host.remove());

test('React: one scene under StrictMode, synced on re-render, destroyed on unmount', async () => {
  const sceneRef = createRef<UnicornStudioScene | null>();
  const onLoad = vi.fn();
  const root = createRoot(host);
  const scene = (speed: number) => (
    <StrictMode>
      <ReactScene projectId="a" width={300} variables={{ speed }} placeholder="/still.png" sceneRef={sceneRef} onLoad={onLoad} />
    </StrictMode>
  );
  const render = (speed: number) =>
    act(async () => {
      root.render(scene(speed));
      await settle();
    });

  act(() => root.render(scene(1)));
  expect(host.querySelector('img')?.getAttribute('src')).toBe('/still.png');

  await act(settle);
  expect(sdk.live()).toHaveLength(1);
  expect(sceneRef.current).toBe(sdk.live()[0]);
  expect(onLoad).toHaveBeenCalledTimes(1);
  expect(host.querySelector('img')).toBeNull();
  expect((host.firstElementChild as HTMLElement).style.width).toBe('300px');

  await render(2);
  expect(sdk.live()).toHaveLength(1);
  expect(sdk.live()[0].setVariables).toHaveBeenLastCalledWith({ speed: 2 });

  await act(async () => root.unmount());
  expect(sdk.live()).toEqual([]);
  expect(sceneRef.current).toBeNull();
});

test('Next.js: the next entry is the React component', () => {
  expect(NextScene).toBe(ReactScene);
});

test('Vue: emits load, exposes the scene, syncs in-place variable changes, destroys on unmount', async () => {
  const variables = reactive({ speed: 1 });
  const component = ref<{ scene: UnicornStudioScene | null }>();
  const onLoad = vi.fn();
  const app = createApp(() =>
    h(VueScene, { ref: component, projectId: 'a', variables, onLoad }, { placeholder: () => h('p', 'Loading') })
  );
  app.mount(host);
  expect(host.textContent).toBe('Loading');
  await settle();

  expect(sdk.live()).toHaveLength(1);
  // Absent Boolean props must not reach the SDK as false.
  expect(sdk.live()[0].options).toMatchObject({ lazyLoad: true, production: false });
  expect(onLoad).toHaveBeenCalledWith(sdk.live()[0]);
  expect(component.value!.scene).toBe(sdk.live()[0]);
  expect(host.textContent).toBe('');

  variables.speed = 2;
  await nextTick();
  expect(sdk.live()[0].setVariables).toHaveBeenLastCalledWith({ speed: 2 });

  app.unmount();
  expect(sdk.live()).toEqual([]);
});