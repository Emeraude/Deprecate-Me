#!/usr/bin/env node

var deprecate = require('./index.js');

function std() {
    deprecate();
}

function since() {
    deprecate({since: '0.2.5'});
}

function remove() {
    deprecate({removed: '2.0.0'});
}

function printSeveral() {
    deprecate({printOnce: false});
}

function withMessage() {
    deprecate({message: 'You should use console.log instead'});
}

function useInstead() {
    deprecate({replaceBy: 'replaceBy'});
}

function all() {
    deprecate({since: '0.2.5', removed: '1.0.0', current: '0.8.0', replaceBy: 'none', message: 'You should avoid it'});
}

std();
std();
since();
remove();
printSeveral();
printSeveral();
withMessage();
useInstead();
all();
all();
