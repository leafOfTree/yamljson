# yamljson

实现 yaml 和 json 文件的相互转换

covert between yaml and json files

## CLI Usage
    // stdout json
    yamljson config.yaml
    // save as file
    yamljson config.yaml > config.json

    // stdout yaml
    yamljson config.json 
    // save as file
    yamljson config.json > config.yaml

## Install

    npm i yamljson -g

## Document

### CLI options

-d: show debug info

-h: show help info

### API

Install in project

    npm i yamlsjon

require and use `convert` method

```javascript
const yamljson = require('yamljson');

const outputYAML = yamljson.convert('./config.json');
const outputJSON = yamljson.convert('./config.yaml');
```
