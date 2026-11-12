import { readFileSync } from 'node:fs';
import { afterEach, expect, test, vi } from 'vitest';
import { mountScene } from '../src/index.js';
import pkg from '../package.json';
import { addScene, live, scenes, settle } from './sdk.js';

vi.mock('../sdk/unicornStudio.js', () => import('./sdk.js'));
vi.mock('../sdk/model-renderer.js', () => ({ bundledRenderer: true }));

const element = () => document.body.appendChild(document.createElement('div'));

afterEach(() => {
  scenes.length = 0;
  addScene.mockClear();
  delete (window as any).UnicornStudio;
  document.head.innerHTML = '';
});

test('the bundled SDK is the package version', () => {
  const sdk = readFileSync('sdk/unicornStudio.js', 'utf8');
  expect(sdk).toContain(`let version = "${pkg.version}";`);
});

test('creates the scene with the bundled SDK, on the element, with the default options', async () => {
  const target = element();
  mountScene(target, { projectId: 'a', variables: { speed: 1 }, preset: 'Dark' });
  await settle();

  expect(document.head.querySelector('script')).toBeNull();
  expect(scenes[0].options).toMatchObject({
    element: target,
    projectId: 'a',
    lazyLoad: true,
    production: false,
    initialVariables: { speed: 1 },
    initialPreset: 'Dark',
  });
  // Left for the scene's published settings to decide.
  expect(scenes[0].options.scale).toBeUndefined();
  expect(await scenes[0].options.modelRenderer()).toMatchObject({ bundledRenderer: true });
});

test('sdkUrl loads that script once per page instead, and leaves the model renderer to it', async () => {
  const sdkUrl = 'https://example.com/sdk.js';
  const onLoad = vi.fn();
  mountScene(element(), { projectId: 'a', sdkUrl, onLoad });
  mountScene(element(), { projectId: 'b', sdkUrl, onLoad });

  const scripts = document.head.querySelectorAll('script');
  expect([...scripts].map(script => script.src)).toEqual([sdkUrl]);

  (window as any).UnicornStudio = { addScene };
  scripts[0].onload!(new Event('load'));
  await settle();
  expect(live().map(scene => scene.options.projectId)).toEqual(['a', 'b']);
  expect(live()[0].options.modelRenderer).toBeUndefined();
  expect(onLoad).toHaveBeenCalledTimes(2);
});

test('a failed sdkUrl load reports the error and can be retried', async () => {
  const sdkUrl = 'https://example.com/missing.js';
  const onError = vi.fn();
  mountScene(element(), { projectId: 'a', sdkUrl, onError });
  document.head.querySelector('script')!.onerror!(new Event('error'));
  await settle();
  expect(onError.mock.calls[0][0].message).toContain(sdkUrl);

  mountScene(element(), { projectId: 'a', sdkUrl });
  expect(document.head.querySelectorAll('script')).toHaveLength(2);
});

test('reports a missing projectId and a failed scene through onError', async () => {
  const onError = vi.fn();
  mountScene(element(), { onError });
  mountScene(element(), { projectId: 'missing', onError });
  await settle();
  expect(onError.mock.calls.map(([error]) => error.message)).toEqual([
    'UnicornScene needs a projectId or a jsonFilePath.',
    'Error fetching data',
  ]);
});

test('syncs paused, variables and preset to the live scene without recreating it', async () => {
  const handle = mountScene(element(), { projectId: 'a', variables: { speed: 1 } });
  await settle();
  const [scene] = scenes;

  handle.update({ projectId: 'a', variables: { speed: 1 } });
  expect(scene.setVariables).not.toHaveBeenCalled();

  handle.update({ projectId: 'a', variables: { speed: 2 }, paused: true });
  expect(scene.setVariables).toHaveBeenLastCalledWith({ speed: 2 });
  expect(scene.paused).toBe(true);

  // Variables go back on top of a newly selected preset.
  handle.update({ projectId: 'a', variables: { speed: 2 }, preset: 'Dark', paused: true });
  expect(scene.setPreset).toHaveBeenCalledWith('Dark');
  expect(scene.setVariables).toHaveBeenCalledTimes(2);

  expect(scenes).toHaveLength(1);
  expect(handle.scene).toBe(scene);
});

test('applies options that changed while the scene was loading', async () => {
  const handle = mountScene(element(), { projectId: 'a', variables: { speed: 1 } });
  handle.update({ projectId: 'a', variables: { speed: 2 }, paused: true });
  await settle();

  expect(scenes[0].setVariables).toHaveBeenCalledWith({ speed: 2 });
  expect(scenes[0].paused).toBe(true);
});

test('syncing a fallback scene, which has no variable methods, does not throw', async () => {
  const fallback = { fallbackOnly: true, destroy: vi.fn() };
  addScene.mockResolvedValueOnce(fallback);
  const onLoad = vi.fn();
  const handle = mountScene(element(), { projectId: 'a', onLoad });
  await settle();

  handle.update({ projectId: 'a', variables: { speed: 2 }, preset: 'Dark', paused: true, onLoad });
  expect(onLoad).toHaveBeenCalledWith(fallback);
  handle.destroy();
  expect(fallback.destroy).toHaveBeenCalled();
});

test('recreates the scene when an init option changes', async () => {
  const onLoad = vi.fn();
  const handle = mountScene(element(), { projectId: 'a', onLoad });
  await settle();

  handle.update({ projectId: 'b', onLoad });
  expect(handle.scene).toBeNull();
  await settle();

  expect(scenes[0].destroyed).toBe(true);
  expect(live().map(scene => scene.options.projectId)).toEqual(['b']);
  expect(onLoad).toHaveBeenCalledTimes(2);
});

test('destroying before the scene finishes loading leaves nothing behind', async () => {
  const onLoad = vi.fn();
  const handle = mountScene(element(), { projectId: 'a', onLoad });
  handle.destroy();
  await settle();

  expect(live()).toEqual([]);
  expect(onLoad).not.toHaveBeenCalled();
});

test('forwards variable changes to the latest callback', async () => {
  const first = vi.fn();
  const latest = vi.fn();
  const handle = mountScene(element(), { projectId: 'a', onVariableChange: first });
  await settle();
  handle.update({ projectId: 'a', onVariableChange: latest });

  scenes[0].emitVariableChange('speed', 2, { speed: 2 });
  expect(first).not.toHaveBeenCalled();
  expect(latest).toHaveBeenCalledWith('speed', 2, { speed: 2 });
});
