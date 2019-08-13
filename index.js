'use strict';

const validator = require('./lib/validator');


// Vinicio - add some code here to be able to use the module using console.log

console.log('Tests by Joanna below');
console.log('Is 5 a positive?', validator.isValid(5, 'positive'));
console.log('Is 3 an even number?', validator.isValid(3, 'even-numbers'));
console.log('Is false a string?', validator.isString(false));
console.log('Is 10 a number?', validator.isNum(10));