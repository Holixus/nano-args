[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

# nano-args

[![Join the chat at https://gitter.im/Holixus/nano-args](https://badges.gitter.im/Holixus/nano-args.svg)](https://gitter.im/Holixus/nano-args?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Process arguments parsing helper function

## API

### args(help_text, arguments_names, options)

* help_text `String`
* arguments_names `Array`
  * identifier of argument
* options `Array` of `Array`
  0. Short option name
  1. long option name and 'type'
  2. option description

There are more details about options format in docs for [node-getopt](https://github.com/jiangmiao/node-getopt).

## Example

```js
var args = require('nano-args');

args = args("\
Usage: node util.js [OPTIONS] <profile> [<theme>]\n\
profile  - a device profile name or comma separated(without spaces) list of profiles names.\n\
           There's two shortcuts: 'all' and 'tests'. 'all' means all profiles. 'tests' means run\n\
           all tests.\n\
Options:\n\
[[OPTIONS]]\n", [ 'profile', 'theme' ], [
		[ 'f', 'folder=',    'logs folder path. default value is "'+logs_folder+'"' ],
		[ 'F', 'features=',  'features space separated modifiers list like "feat -nopack +web_bridges"' ],
		[ 'C', 'components=','components space separated modifiers list like "acl -usb +pptp"' ],
		[ 'n', 'ndwrt=',     'ndrwt folder path. default value is "'+ndwrt+'"'],
		[ 's', 'server',     'run localhost web server with built web-interface'],
		[ 'd', 'debug',      'enable web server debug prompt'],
		[ 'H', 'host=',      'host for web server ndm requests'],
		[ 'L', 'last=',      'use last run stored arguments'],
		[ 'P', 'preset=',    'build preset. (release, host, ...)'],
		[ 'h', 'help',       'print usage instruction' ]
	]);

console.log(args);
```

[bithound-image]: https://www.bithound.io/github/Holixus/nano-args/badges/score.svg
[bithound-url]: https://www.bithound.io/github/Holixus/nano-args

[gitter-image]: https://badges.gitter.im/Holixus/nano-args.svg
[gitter-url]: https://gitter.im/Holixus/nano-args

[npm-image]: https://badge.fury.io/js/nano-args.svg
[npm-url]: https://badge.fury.io/js/nano-args

[github-tag]: http://img.shields.io/github/tag/Holixus/nano-args.svg
[github-url]: https://github.com/Holixus/nano-args/tags

[travis-image]: https://travis-ci.org/Holixus/nano-args.svg?branch=master
[travis-url]: https://travis-ci.org/Holixus/nano-args

[coveralls-image]: https://coveralls.io/repos/github/Holixus/nano-args/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/Holixus/nano-args?branch=master

[david-image]: https://david-dm.org/Holixus/nano-args.svg
[david-url]: https://david-dm.org/Holixus/nano-args

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE

[downloads-image]: http://img.shields.io/npm/dt/nano-args.svg
[downloads-url]: https://npmjs.org/package/nano-args
