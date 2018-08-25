const yaml = require('js-yaml');
const fs = require('fs');
const prettier = require('prettier');

const yamljson = {};
yamljson.yaml2json = yaml2json;
yamljson.json2yaml = json2yaml;
yamljson.convert = convert;
module.exports = yamljson;

function convert(src, options) {
  if (src.match(/\.yaml$/)) {
    return yamljson.yaml2json(src, options);
  }
  if (src.match(/\.json$/)) {
    return yamljson.json2yaml(src, options);
  }

  console.log('Error: only support .yaml or .json files')
}

// YAML to JSON
function yaml2json(src, options) {
  try {
    // load YAML
    const yamlDoc = yaml.safeLoad(fs.readFileSync(src));

    const jsonDoc = prettier.format(JSON.stringify(yamlDoc), {
      parser: 'json'
    });

    log();
    return jsonDoc;

    function log() {
      debug('Read YAML: ');
      debug(yamlDoc);
      debug('Output JSON: ');
      if (process.argv.includes('-d') || options && options.stdout) {
        console.log(jsonDoc);
      }
    }
  } catch (e) {
    console.log(e);
  }


}

function json2yaml(src, options) {
  try {
    // load json
    const jsonDoc = JSON.parse(fs.readFileSync(src));

    // dump yaml
    const yamlDoc = prettier.format(
     yaml.safeDump(jsonDoc),
      {
        parser: 'yaml'
      }
    )

    log();
    return yamlDoc;

    function log() {
      debug('Read JSON: ')
      debug(jsonDoc);
      debug('Output YAML: ');
      if (process.argv.includes('-d') || 
        options && options.stdout) {
        console.log(yamlDoc);
      }
    }
  } catch (e) {
    console.log(e);
  }
}


function debug(...info) {
  if (process.argv.includes('-d')) {
    console.log(...info);
  }
}

