'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic numeric validation', () => {
  it('positive', () => {
    expect(validator.isValid(10, 'positive')).toBeTruthy();
    expect(validator.isValid(-1, 'positive')).toBeFalsy();
    expect(validator.isValid(0, 'positive')).toBeFalsy();
  });

  it('negative', () => {
    expect(validator.isValid(-10, 'negative')).toBeTruthy();
    expect(validator.isValid(1, 'negative')).toBeFalsy();
    expect(validator.isValid(0, 'negative')).toBeFalsy();
  });

  it('odd-numbers', () => {
    expect(validator.isValid(1, 'odd-numbers')).toBeTruthy();
    expect(validator.isValid(-10, 'odd-numbers')).toBeFalsy();
  });

  it('even-numbers', () => {
    expect(validator.isValid(10, 'even-numbers')).toBeTruthy();
    expect(validator.isValid(-1, 'even-numbers')).toBeFalsy();
    expect(validator.isValid(0, 'even-numbers')).toBeFalsy();
  });
})

// TODO: Make this series of tests less repetitive ... DRY it out
describe('validation of string type', () => {
  it('valid strings', () => {
    expect(validator.isString('hi there')).toBeTruthy();
  });

  it('invalid strings', () => {
    let invalidData = [1, [], {}, ()=>{}, true];
    for(let invalidValue of invalidData){
      expect(validator.isString(invalidValue)).toBeFalsy();
    }
  });
});

describe('validation of numeric type', () => {
  it('valid numbers', () => {
    expect(validator.isNum(10)).toBeTruthy();
  });

  it('invalid numbers', () => {
    let invalidData = ['hi', [], {}, () => {}, true];
    for(let invalidValue of invalidData){
      expect(validator.isNum(invalidValue)).toBeFalsy();
    }
  });
});

describe('validation of arrays', () => {
  it('valid numbers', () => {
    expect(validator.isArray([])).toBeTruthy();
  });

  it('invalid numbers', () => {
    let invalidData = ['hi', 1, {}, () => {}, true];
    for(let invalidValue of invalidData){
      expect(validator.isArray(invalidValue)).toBeFalsy();
    }
  });
});

xdescribe('validation of objects', () => {
  it('objects', () => {
    expect(true).toBeFalsy();
  });
});

xdescribe('validation of booleans', () => {
  it('booleans', () => {
    expect(true).toBeFalsy();
  });
});

xdescribe('validation of functions', () => {
  it('functions', () => {
    expect(true).toBeFalsy();
  });
});

describe('validator module performs complex validations', () => {
  let person = {
    name: 'me',
    hair: {color: 'black'},
    age: 10,
    favoriteFoods: ['fish', 'chips']
  };

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(validator.checkObjProperty('nationality', person)).toBeFalsy();
    expect(validator.checkObjProperty('hair', person)).toBeTruthy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(validator.isString(person.name)).toBeTruthy();
    expect(validator.isString(person.age)).toBeFalsy();
  });

  // it('validates the types of values contained in an array', () => {
  //   // i.e. an array of all strings or numbers
  //   expect(validator.checkArrayValues('isString', person.favoriteFoods)).toBeTruthy();
  // });

  // it('validates a value array against an approved list', () => {
  //   // i.e. a string might only be allowed to be "yes" or "no"
  //   expect(true).toBeFalsy();
  // });

  // TODO: Cover so, so many more cases

});

