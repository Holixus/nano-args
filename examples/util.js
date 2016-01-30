"use strict";

var args = require('..');

args = args("\
Usage: node util.js [OPTIONS] <profile> [<theme>]\n\
profile  - a device profile name or comma separated(without spaces) list of profiles names.\n\
           There's two shortcuts: 'all' and 'tests'. 'all' means all profiles. 'tests' means run\n\
           all tests.\n\
Options:\n\
[[OPTIONS]]\n", [ 'profile', 'theme' ], [
		[ 'f', 'folder=',    'logs folder path' ],
		[ 'F', 'features=',  'features space separated modifiers list like "feat -nopack +web_bridges"' ],
		[ 'C', 'components=','components space separated modifiers list like "acl -usb +pptp"' ],
		[ 'n', 'ndwrt=',     'ndrwt folder path' ],
		[ 's', 'server',     'run localhost web server with built web-interface' ],
		[ 'd', 'debug',      'enable web server debug prompt' ],
		[ 'H', 'host=',      'host for web server ndm requests' ],
		[ 'L', 'last=',      'use last run stored arguments' ],
		[ 'P', 'preset=',    'build preset. (release, host, ...)' ],
		[ 'h', 'help',       'print usage instruction' ]
	]);

console.log(args);
