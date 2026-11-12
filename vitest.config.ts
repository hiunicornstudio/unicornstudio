import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [svelte()],
  // Svelte's package.json resolves to its server build without this.
  resolve: { conditions: ['browser'] },
  test: { environment: 'jsdom' },
});
