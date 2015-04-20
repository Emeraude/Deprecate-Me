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

function all() {
    deprecate({since: '0.2.5', removed: '1.0.0', current: '0.8.0'});
}

std();
since();
remove();
all();
