var color = require('cli-color');
require('./get_function_name');

var version;
if (!(version = process.env.npm_package_version)) {
    try {
	version = require('../../package.json').version;
    } catch(e) {
	;
    }
}

module.exports = function(opt) {
    var msg = color.magenta('DEPRECATED') + ' Function "' + __parent_function + '" is deprecated';

    if (opt) {
	if (opt.since)
	    msg += ' since ' + color.yellow(opt.since);
	if (opt.current)
	    version = opt.current;
	if (opt.removed) {
	    msg += '. It will be removed in ' + color.yellow(opt.removed);
	    if (version)
		msg += ' (current is ' + color.yellow(version) + ')';
	}
    }
    console.warn(msg);
}
