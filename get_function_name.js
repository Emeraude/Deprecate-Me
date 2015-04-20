Object.defineProperty(global, '__stack', {
    get: function() {
	var orig = Error.prepareStackTrace;
	Error.prepareStackTrace = function(_, stack) {
	    return stack;
	};
	var err = new Error;
	Error.captureStackTrace(err, arguments.callee);
	var stack = err.stack;
	Error.prepareStackTrace = orig;
	return stack;
    }
});

Object.defineProperty(global, '__function', {
    get: function() {
	return __stack[1].getFunctionName();
    }
});

Object.defineProperty(global, '__parent_function', {
    get: function() {
	return __stack[2].getFunctionName();
    }
});
