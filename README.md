# resolve

a simple tool to verify where the module resolve to

## install 

```bash
$ npm install resolve -g 
```

## usage

### resolve from current dir

```bash
$resolve minimist
minimist resolve to /some/where/node_modules/minimist/index.js
```
### resolve from specified dir or file

```bash
$ pwd
/some/other/place/

$resolve minimist --from /some/where
minimist resolve to /some/where/node_modules/minimist/index.js

$resolve minimist --from /some/where/index.js
minimist resolve to /some/where/node_modules/minimist/index.js
```
