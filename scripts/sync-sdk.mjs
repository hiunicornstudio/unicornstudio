// Copies the SDK this package bundles out of the app repo. Runs in npm's `version` lifecycle,
// so `npm version 2.5.3` is the whole bump: it fails unless the app repo's built SDK is 2.5.3.
//
//   node scripts/sync-sdk.mjs [path to the app repo, default ../unicorn-studio-2.0]
import { copyFileSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const app = resolve(root, process.argv[2] ?? '../unicorn-studio-2.0');

const files = {
  // Built by `npm run build:lib:lite`.
  'public/unicornStudio.es.js': 'sdk/unicornStudio.js',
  // Source: it is already an ES module, and imports ./three-bundle.js.
  'src/lib/extensions/model-renderer.js': 'sdk/model-renderer.js',
  // Built by `npm run build:three`.
  'public/extensions/three-bundle.js': 'sdk/three-bundle.js',
};

for (const [from, to] of Object.entries(files)) copyFileSync(resolve(app, from), resolve(root, to));

const { version } = JSON.parse(readFileSync(resolve(root, 'package.json')));
const sdkVersion = readFileSync(resolve(root, 'sdk/unicornStudio.js'), 'utf8').match(/^let version = "(.+)";$/m)?.[1];

if (sdkVersion !== version) {
  console.error(
    `The SDK built in ${app} is ${sdkVersion}, but this package is ${version}.\n` +
      `Bump the SDK there and run \`npm run build:lib:lite\` first.`
  );
  process.exit(1);
}
console.log(`Synced SDK ${sdkVersion} from ${app}`);
