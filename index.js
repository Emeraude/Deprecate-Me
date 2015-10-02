var color = require('cli-color');
var stack = require('stack-infos');
var printed = {};

function thumbprint(elem) {
  return elem.file + ':' + elem.function + ':' + elem.line + ':' + elem.column;
}

module.exports = function(opt) {
  var version;
  try {
    version = require('../../package.json').version;
  } catch(e) {
    version = process.env.npm_package_version;
  }
  var msg = color.magenta('DEPRECATED') + ' Function "' + color.bold(opt && opt.name ? opt.name : stack(1).function) + '" is deprecated';

  if (opt) {
    if (opt.printOnce !== false
	&& printed[thumbprint(stack(1))] == true)
      return;
    if (opt.since)
      msg += ' since ' + color.yellow(opt.since);
    msg += '.';
    if (opt.current)
      version = opt.current;
    if (opt.removed) {
      msg += ' It will be removed in ' + color.yellow(opt.removed);
      if (version)
	msg += ' (current is ' + color.yellow(version) + ')';
      msg += '.';
    }
    if (opt.replaceBy)
      msg += ' You should use ' + color.yellow.bold('"' + opt.replaceBy + '"') + ' instead.';
    if (opt.message)
      msg += '\n' + color.magenta.bold('---------> ') + opt.message + '.';
  }
  else if (printed[thumbprint(stack(1))] == true)
    return;
  else
    msg += '.';
  printed[thumbprint(stack(1))] = true;
  console.warn(msg);
}
