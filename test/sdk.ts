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

/** Puts a stand-in SDK on `window`, the way the real script does once it loads. */
export function installSdk() {
  const scenes: FakeScene[] = [];
  (window as any).UnicornStudio = {
    addScene: async (options: Record<string, any>) => {
      if (options.projectId === 'missing') throw new Error('Error fetching data');
      scenes.push(createScene(options));
      return scenes.at(-1);
    },
  };
  return { scenes, live: () => scenes.filter(scene => !scene.destroyed) };
}

export const settle = () => new Promise(resolve => setTimeout(resolve));
