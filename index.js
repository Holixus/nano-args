"use strict";

module.exports = function args(help, args, options) {
	var getopt = new (require('node-getopt'))(options);
	getopt.setHelp(help);
	getopt.bindHelp();
	var opt = getopt.parseSystem();

	var opts = opt.options;

	var argv = opt.argv,
	    argc = argv.length;

	for (var i = 0, n = args.length; i < n; ++i) {
		var id = args[i];
		opts[id] = i < argc ? argv[i] : undefined;
	}
	opts.argv = argv.slice(n);
	return opts;
};
