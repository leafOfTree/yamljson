const { execSync } = require('child_process');
const fs = require('fs');
const prettier = require('prettier');

const packagePath = './package.json'
const package = require(packagePath);
const versions = package.version.split('.');
const length = versions.length;
versions[length-1] = parseInt(versions[length-1]) + 1
package.version = versions.join('.');

fs.writeFileSync(packagePath, prettier.format(JSON.stringify(package), {
  parser: 'json'
}));
