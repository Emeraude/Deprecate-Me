#!/usr/bin/env node

var deprecate = require('./index.js');

function std() {
    deprecate();
}

function since() {
    deprecate({since: '0.2.5'});
}

function remove() {
    deprecate({removed: '1.0.0'});
}

function printSeveral() {
    deprecate({printOnce: false});
}

function withMessage() {
    deprecate({message: "You should use console.log instead"});
}

function all() {
    deprecate({since: '0.2.5', removed: '1.0.0', current: '0.8.0', message: "You should avoid it"});
}

std();
std();
since();
remove();
printSeveral();
printSeveral();
withMessage();
all();
all();
