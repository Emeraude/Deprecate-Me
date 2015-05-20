var color = require('cli-color');
var stack = require('stack-infos');
var printed = {};

var version;
try {
    version = require('../../package.json').version;
} catch(e) {
    version = process.env.npm_package_version;
}

function thumbprint(elem) {
    return elem.file + ':' + elem.function + ':' + elem.line + ':' + elem.column;
}

module.exports = function(opt) {
    var msg = color.magenta('DEPRECATED') + ' Function "' + color.bold(stack(1).function) + '" is deprecated';

    thumbprint(stack(1));
    if (opt) {
	if (opt.printOnce !== false
	    && printed[thumbprint(stack(1))] == true)
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
    else if (printed[thumbprint(stack(1))] == true)
	return;
    printed[thumbprint(stack(1))] = true;
    console.warn(msg);
}
