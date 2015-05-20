var color = require('cli-color');
var printed = {};
require('./get_function_name');

var version;
try {
    version = require('../../package.json').version;
} catch(e) {
    version = process.env.npm_package_version;
}

module.exports = function(opt) {
    var msg = color.magenta('DEPRECATED') + ' Function "' + color.bold(__parent_function) + '" is deprecated';

    if (opt) {
	if (opt.printOnce !== false
	    && printed[__parent_function] == true)
	    return;
	if (opt.since)
	    msg += ' since ' + color.yellow(opt.since);
	if (opt.current)
	    version = opt.current;
	if (opt.removed) {
	    msg += '. It will be removed in ' + color.yellow(opt.removed);
	    if (version)
		msg += ' (current is ' + color.yellow(version) + ')';
	}
	if (opt.message)
	    msg += '\n' + color.magenta.bold('---------> ') + opt.message;
    }
    else if (printed[__parent_function] == true)
	return;
    printed[__parent_function] = true;
    console.warn(msg);
}
