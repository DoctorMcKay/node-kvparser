# KeyValues/VDF Parser

[![npm version](https://img.shields.io/npm/v/kvparser.svg)](https://npmjs.com/package/kvparser)
[![npm downloads](https://img.shields.io/npm/dm/kvparser.svg)](https://npmjs.com/package/kvparser)
[![license](https://img.shields.io/npm/l/kvparser.svg)](https://github.com/DoctorMcKay/node-kvparser/blob/master/LICENSE)
[![sponsors](https://img.shields.io/github/sponsors/DoctorMcKay.svg)](https://github.com/sponsors/DoctorMcKay)

Parses Valve's [KeyValues](https://developer.valvesoftware.com/wiki/KeyValues) aka VDF format.

Fully compliant with escape sequences and comments.

## Usage

Import the package:

```js
const {parse} = require('kvparser');
```

or

```js
import {parse} from 'kvparser';
```

Then parse your data:

```js
let data = parse(vdfData);
```
