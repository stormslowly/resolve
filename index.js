#!/usr/bin/env node
const cwd = process.cwd();
const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2), {
  string: ['from'], alias: {f: 'from'},
});

const {
  _: toResolves, from = cwd
} = argv


let p = from;
try {
  const state = fs.statSync(from)
  p = state.isDirectory() ? from : path.dirname(from)
} catch (e) {
  console.error(e)
  process.exit(-1)
}

for (let i = 0; i < toResolves.length; i++) {
  const toResolve = toResolves[i];
  try {
    const resolved = require.resolve(toResolve, {paths: [p]});
    console.log(`${toResolve} resolve to ${resolved}`);
  } catch (e) {
    console.error(`${toResolve} can not be resolve`)
  }
}
