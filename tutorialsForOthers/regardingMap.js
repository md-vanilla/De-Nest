
// Reminder Build a test suite go through popular versions of node and find minimum node versions for each command 👍

// Variable Declerations
var arr = [7, 1, 2, 720, 4];

var obj = { a: 7, b: 2, c: {value:3} };

// Regarding the map function
const mapOverObject = (myObject) =>
  Object.keys(myObject).map( (key, index) => {
   return { index, key, value: myObject[key] }
  })


const mapOverArray = (myArray) =>
  myArray.map( (value, index) => {
    return {index, value}
  })

console.log(
  'obj:', mapOverObject(obj)
)
console.log(
  'arr:', mapOverArray(arr)
)

// Regarding the map es2017

const newObject = { a: 1, b: 2 }
const es2017Map = (myObject) =>
  Object.entries(myObject).map(([key, value]) => [key, value] )

console.log(
  'object: ' , es2017Map(newObject)
)

