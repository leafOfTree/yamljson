#!/usr/bin/env node

const yamljson = require('./lib');

const arg = parseArgs(process.argv.slice(2));
if (arg.src) {
  yamljson.convert(arg.src, {
    stdout: true
  });
}

function parseArgs(args) {
  const arg = {};
  const options = {
    '-s': 'src',
    '-d': 'debug',
    '-h': 'help', 
  };

  for (var i = 0 ; i < args.length; i++) {
    if (args[i] in options) {
      arg[options[args[i]]] = args[i + 1] || true;
    }
  }

  if ('help' in arg || Object.keys(arg).length === 0) {
    console.log(`
      Convert yaml to json or json to yaml based on file type.

      Example: 
        yamljson -s config.yaml // output json
        yamljson -s config.json // output yaml

      options: 
        -s  src file
        -d  show debug info
        -h  show help info
    `)
  }
  return arg;
}
