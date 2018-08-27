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
    '-d': 'debug',
    '-h': 'help', 
  };

  if (args[0] && !args[0].match(/^-/)) {
    arg.src = args[0];
    for (var i = 1 ; i < args.length; i++) {
      if (args[i] in options) {
        arg[options[args[i]]] = args[i + 1] || true;
      }
    }
  }

  if (!arg.src || 'help' in arg || Object.keys(arg).length === 0) {
    console.log(`
      Convert yaml to json or json to yaml based on file type.

      Example: 
        yamljson config.yaml -d // output json with debug info
        yamljson config.json // output yaml

      options: 
        -d  show debug info
        -h  show help info
    `)
  }
  return arg;
}
