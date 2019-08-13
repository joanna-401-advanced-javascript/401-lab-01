'use strict';

// Vinicio - this is similar to module.exports = {};, but you are giving it an easier to use name
let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */


// Ideas for rules : Positive values / Negative values / odd values / even values /
// specific values / bigger than five /

// if you need to setup more complex rules, remember that rules can be an object too
validator.isValid = (input, rules) => {
  if(rules === 'positive') {
    return input > 0;
  }

  if(rules === 'negative') {
    return input < 0;
  }

  if(rules === 'odd-numbers'){
    return input % 2 !== 0;
  }

  if(rules === 'even-numbers'){
    if(input === 0){
      return false;
    } else {
      return input % 2 === 0;
    }
  }
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

validator.isNum = (input) => {
  return typeof input === 'number';
}

validator.isArray = (input) => {
  return Array.isArray(input);
}

validator.checkObjProperty = (input, obj) => {
  return obj.hasOwnProperty(input);
}

// validator.checkArrayValues = (thisFunction, arr) => {
//   let checker = null;
//   arr.forEach(value => {
//     if (thisFunction(value)){
//       return true;
//     } else {
//       return false;
//     }
//   });
//   return checker;
// }

