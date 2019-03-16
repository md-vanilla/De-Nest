const assert = require('assert')
const { describe, it } = require('mocha');
const { flattenAnything, handleNested,reduceArray,reduceObject, commonReduceLogic } = require('./de_nest.js')
const { varInfo, updatePv, ecma2015ArrMerge, convertObjectToArrays } = require('./js_nest_helpers.js')

const obj = { a: 7, b: 2, c: {value:3} };
describe('sanity', () => {
  it('sanity', () => {
    assert.equal(10, 10);
  })
  it('sanity', () => {
    assert.notEqual(0, 10);
  })
})
describe('de-nest is working properly for', () => {
  describe('#array', () => {

    const arr = [7, undefined,  {value: undefined, value2: 4}, 1, 2, 3, 4];
    const obj = { a: 7, b: 2, c: {value:3} };

    it('flattenAnything, evaluate an array as an array', () => {
      assert.equal(
        JSON.stringify(flattenAnything({arr})),
        '{"keys":["arr[0]","arr[2].value2","arr[3]","arr[4]","arr[5]","arr[6]"],"values":[7,4,1,2,3,4]}'
      );
    })

    it('handleNested, evaluate an array as an array', () => {
      assert.equal(
        JSON.stringify(handleNested({arr})),
        '{"arr[0]":7,"arr[2].value2":4,"arr[3]":1,"arr[4]":2,"arr[5]":3,"arr[6]":4}'
      );
    })

    it('reduce array method should give array syntax top level with either as it nests deeper', () => {
      assert.equal(JSON.stringify(reduceArray(['arr', arr])),
        '{"arr[0]":7,"arr[2].value2":4,"arr[3]":1,"arr[4]":2,"arr[5]":3,"arr[6]":4}' );
    })

    it('reduce a array method should not give object syntax top level', () => {
      assert.notEqual(JSON.stringify(reduceArray(['obj', obj])),'{"obj.a":7,"obj.b":2,"obj.c.value":3}' );
    })

    it('reduce b array method should not give object syntax top level', () => {
      assert.equal(JSON.stringify(reduceArray(['obj', obj])),'"What did you do 😱 , this is not an array... do not worry I will fix it."');
    })
  })
  describe('#object', () => {

    const obj = { a: 7, b: 2, c: {value:3} };
    const arr = [7, undefined,  {value: undefined, value2: 4}, 1, 2, 3, 4];

    it('flattenAnything, evaluate an object as an object', () => {
      assert.equal(JSON.stringify(flattenAnything({obj})),'{"keys":["obj.a","obj.b","obj.c.value"],"values":[7,2,3]}' );
    })

    it('handleNested, evaluate an object as an object', () => {
      assert.equal(JSON.stringify(handleNested({obj})),'{"obj.a":7,"obj.b":2,"obj.c.value":3}' );
    })

    it('reduce object method should give object syntax top level', () => {
      assert.equal(JSON.stringify(reduceObject(['obj', obj])),'{"obj.a":7,"obj.b":2,"obj.c.value":3}' );
    })

    it('reduce object method should not give array syntax top level', () => {
      assert.notEqual(JSON.stringify(reduceObject(['arr', arr])),'{"arr[0]":7,"arr[2].value2":4,"arr[3]":1,"arr[4]":2,"arr[5]":3,"arr[6]":4}' );
    })
  })
  describe('#merge', () => {

    const mergeObj1 = { a: 7, b: 2, c: {value:3} };
    const mergeObj2 = { c: 7, d: 2 };

    it('two objects together', () => {
      assert.equal(JSON.stringify(ecma2015ArrMerge(mergeObj1, mergeObj2)), '{"c":{"value":3},"d":2,"a":7,"b":2}');
    })
  })

  describe('#convert', () => {
    const obj = {"obj.a":7,"obj.b":2,"obj.c.value":3}
    assert.equal(JSON.stringify(convertObjectToArrays(obj)),'{"keys":["obj.a","obj.b","obj.c.value"],"values":[7,2,3]}')
  })
})
