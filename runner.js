const { handleNested,reduceArray,reduceObject, commonReduceLogic } = require('./de_nest.js')
const { varInfo, updatePv, ecma2015ArrMerge } = require('./js_nest_helpers.js')

const obj = { a: 7, b: 2, c: {value:3} };
const arr = [7, undefined,  {value: undefined, value2: 4}, 1, 2, 3, 4];

console.log('\ninput: ', {obj}, '\n')
console.log(handleNested({obj}))

console.log('\ninput: ', arr, '\n')
console.log(handleNested({arr}))
