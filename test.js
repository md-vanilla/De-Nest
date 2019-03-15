const assert = require('assert')
const { describe, it } = require('mocha');
const { handleNested,reduceArray,reduceObject, commonReduceLogic } = require('./de_nest.js')
const { oldKeyBuildArray, arrKeyCallback, oldKeyBuildObject, objKeyCallback } = require('./js_nest_helpers.js')
const { updatePv, ecma2015ArrMerge } = require('./common_reduce_logic.js')

// console.log('reduce arr:', JSON.stringify(handleNested({arr})))
// reduce arr: {"arr[0]":7,"arr[2].value2":4,"arr[3]":1,"arr[4]":2,"arr[5]":3,"arr[6]":4}
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

    it('handleNested, evaluate an array as an array', () => {
      assert.equal(JSON.stringify(handleNested({arr})),'{"arr[0]":7,"arr[2].value2":4,"arr[3]":1,"arr[4]":2,"arr[5]":3,"arr[6]":4}' );
    })

    it('reduce array method should give array syntax top level with either as it nests deeper', () => {
      assert.equal(JSON.stringify(reduceArray({arr})),'{"arr[0]":7,"arr[2].value2":4,"arr[3]":1,"arr[4]":2,"arr[5]":3,"arr[6]":4}' );
    })

    it('reduce array method should not give object syntax top level', () => {
      assert.notEqual(JSON.stringify(reduceArray({obj})),'{"obj.a":7,"obj.b":2,"obj.c.value":3}' );
    })

    it('reduce array method should not give object syntax top level', () => {
      assert.equal(JSON.stringify(reduceArray({obj})),'"what did you do 😱 , ill fix it. this is not an array..."' );
    })
  })
  describe('#object', () => {

    const obj = { a: 7, b: 2, c: {value:3} };
    const arr = [7, undefined,  {value: undefined, value2: 4}, 1, 2, 3, 4];

    it('handleNested, evaluate an object as an object', () => {
      assert.equal(JSON.stringify(handleNested({obj})),'{"obj.a":7,"obj.b":2,"obj.c.value":3}' );
    })

    it('reduce object method should give object syntax top level', () => {
      assert.equal(JSON.stringify(reduceObject({obj})),'{"obj.a":7,"obj.b":2,"obj.c.value":3}' );
    })

    it('reduce object method should not give array syntax top level', () => {
      assert.notEqual(JSON.stringify(reduceObject({arr})),'{"arr[0]":7,"arr[2].value2":4,"arr[3]":1,"arr[4]":2,"arr[5]":3,"arr[6]":4}' );
    })
  })
  describe('#merge', () => {

    const mergeObj1 = { a: 7, b: 2, c: {value:3} };
    const mergeObj2 = { c: 7, d: 2 };

    it('two objects together', () => {
      assert.equal(JSON.stringify(ecma2015ArrMerge(mergeObj1, mergeObj2)), '{"c":{"value":3},"d":2,"a":7,"b":2}');
    })
  })
})

// console.log('reduce obj:', reduceObject({obj}))
// console.log('reduce obj:', handleNested({obj}))
// console.log()
// console.log('reduce arr:', reduceArray({arr}))
// console.log('reduce arr:', handleNested({arr}))
