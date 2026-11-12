// Runs in npm's `version` lifecycle: the package version is the SDK version it loads,
// so `npm version 2.5.3` is the whole bump.
import { readFileSync, writeFileSync } from 'node:fs';

const { version } = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));
const file = new URL('../src/version.ts', import.meta.url);

writeFileSync(file, readFileSync(file, 'utf8').replace(/SDK_VERSION = '.*'/, `SDK_VERSION = '${version}'`));
