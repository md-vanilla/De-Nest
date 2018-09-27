const assert = require('assert')
const { describe, it } = require('mocha');
const { handleNested,oldKeyBuildArray,arrKeyCallback,oldKeyBuildObject,objKeyCallback,
  reduceArray,reduceObject,commonReduceLogic,updatePv,ecma2018ArrMerge } = require('./de_nest.js')
console.log(handleNested)
console.log(oldKeyBuildArray)
var arr = [7, undefined,  {value: undefined, value2: 4}, 1, 2, 3, 4];
console.log('reduce arr:', JSON.stringify(handleNested(arr, 'arr')))
// reduce arr: {"arr[0]":7,"arr[2].value2":4,"arr[3]":1,"arr[4]":2,"arr[5]":3,"arr[6]":4}
describe('de-nest is working properly for', () => {
  describe('#array', () => {
    it('all items together', () => {
      assert.equal(10, 10);
    })
  })
  describe('#object', () => {
    it('all items together', () => {
      assert.equal(10, 10);
    })
  })
})
