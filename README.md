# yamljson

实现 yaml 和 json 文件的相互转换

covert between yaml and json files

## CLI Usage
    // stdout json
    yamljson -s config.yaml 
    // save as file
    yamljson -s config.yaml > config.json

    // stdout yaml
    yamljson -s config.json 
    // save as file
    yamljson -s config.json > config.yaml

## Install

    npm i yamljson -g

## Document

### CLI options

-s: src file

-d: show debug info

-h: show help info

### API

安装到项目

    npm i yamlsjon

require 后使用 `convert` 方法

```javascript
const yamljson = require('yamljson');

const outputYAML = yamljson.convert('./config.json');
const outputJSON = yamljson.convert('./config.yaml');
```
