import { peerDependencies } from './package.json';
const peerString = Object.keys(peerDependencies)
    .map((key) => `${key}`)
    .join(' ');
console.log(`bun install ${peerString}`);
