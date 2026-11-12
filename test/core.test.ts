import { afterEach, expect, test, vi } from 'vitest';
import { mountScene, SDK_URL, SDK_VERSION } from '../src/index.js';
import pkg from '../package.json';
import { installSdk, settle } from './sdk.js';

const element = () => document.body.appendChild(document.createElement('div'));

afterEach(() => {
  delete (window as any).UnicornStudio;
  document.head.innerHTML = '';
});

test('the pinned SDK is the package version', () => {
  expect(SDK_VERSION).toBe(pkg.version);
  expect(SDK_URL).toContain(`unicornstudio.js@v${pkg.version}/`);
});

test('scenes on one page share a single SDK script', async () => {
  const onLoad = vi.fn();
  mountScene(element(), { projectId: 'a', onLoad });
  mountScene(element(), { projectId: 'b', onLoad });

  const scripts = document.head.querySelectorAll('script');
  expect([...scripts].map(script => script.src)).toEqual([SDK_URL]);

  const { live } = installSdk();
  scripts[0].onload!(new Event('load'));
  await settle();
  expect(live().map(scene => scene.options.projectId)).toEqual(['a', 'b']);
  expect(onLoad).toHaveBeenCalledTimes(2);
});

test('a failed SDK load reports the error and can be retried', async () => {
  const onError = vi.fn();
  mountScene(element(), { projectId: 'a', sdkUrl: 'https://example.com/sdk.js', onError });
  document.head.querySelector('script')!.onerror!(new Event('error'));
  await settle();
  expect(onError.mock.calls[0][0].message).toContain('https://example.com/sdk.js');

  mountScene(element(), { projectId: 'a', sdkUrl: 'https://example.com/sdk.js' });
  expect(document.head.querySelectorAll('script')).toHaveLength(2);
});

test('creates the scene on the element with the default options', async () => {
  const { scenes } = installSdk();
  const target = element();
  mountScene(target, { projectId: 'a', variables: { speed: 1 }, preset: 'Dark' });
  await settle();

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
});

test('reports a missing projectId and a failed scene through onError', async () => {
  installSdk();
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
  const { scenes } = installSdk();
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
  const { scenes } = installSdk();
  const handle = mountScene(element(), { projectId: 'a', variables: { speed: 1 } });
  handle.update({ projectId: 'a', variables: { speed: 2 }, paused: true });
  await settle();

  expect(scenes[0].setVariables).toHaveBeenCalledWith({ speed: 2 });
  expect(scenes[0].paused).toBe(true);
});

test('syncing a fallback scene, which has no variable methods, does not throw', async () => {
  const fallback = { fallbackOnly: true, destroy: vi.fn() };
  (window as any).UnicornStudio = { addScene: async () => fallback };
  const onLoad = vi.fn();
  const handle = mountScene(element(), { projectId: 'a', onLoad });
  await settle();

  handle.update({ projectId: 'a', variables: { speed: 2 }, preset: 'Dark', paused: true, onLoad });
  expect(onLoad).toHaveBeenCalledWith(fallback);
  handle.destroy();
  expect(fallback.destroy).toHaveBeenCalled();
});

test('recreates the scene when an init option changes', async () => {
  const { scenes, live } = installSdk();
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
  const { scenes, live } = installSdk();
  const onLoad = vi.fn();
  const handle = mountScene(element(), { projectId: 'a', onLoad });
  await Promise.resolve();
  handle.destroy();
  await settle();

  expect(scenes).toHaveLength(1);
  expect(live()).toEqual([]);
  expect(onLoad).not.toHaveBeenCalled();
});

test('forwards variable changes to the latest callback', async () => {
  const { scenes } = installSdk();
  const first = vi.fn();
  const latest = vi.fn();
  const handle = mountScene(element(), { projectId: 'a', onVariableChange: first });
  await settle();
  handle.update({ projectId: 'a', onVariableChange: latest });

  scenes[0].emitVariableChange('speed', 2, { speed: 2 });
  expect(first).not.toHaveBeenCalled();
  expect(latest).toHaveBeenCalledWith('speed', 2, { speed: 2 });
});
