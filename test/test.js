const yamljson = require('../lib');
const yaml = require('js-yaml');
const fs = require('fs');

class TestCase {
  yamlToJson() {
    const outputYaml = yamljson.convert('./test/test2.json');
    const fileYaml = fs.readFileSync('./test/test2.yaml', 'utf-8');

    const output = removeSpace(outputYaml);
    const expect = removeSpace(fileYaml);
    return output === expect;
  }

  jsonToYaml() {
    const outputYaml = yamljson.convert('./test/test2.yaml');
    const fileYaml = fs.readFileSync('./test/test2.json', 'utf-8');

    const output = removeSpace(outputYaml);
    const expect = removeSpace(fileYaml);
    return output === expect;
  }
}

runTest();

function runTest() {
  const test = new TestCase();
  const names = Object.getOwnPropertyNames(TestCase.prototype).filter((m) => m !== 'constructor')
  const total = names.length;
  let pass = 0;
  let fail = 0;
  names.forEach((name) => {
    if (test[name]()) {
      pass++;
    } else {
      console.log('Fail: ' + name);
      fail++
    }
  })
  if (pass === total) {
    console.log(`Pass: ${pass} / ${total}`)
  } else {
    console.log(`Pass: ${pass}, Fail: ${fail}`)
  }
}

function removeSpace(str) {
  return str && str.replace(/\s/g, '')
}
