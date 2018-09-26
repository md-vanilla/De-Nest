// After using map a bunch you then learn the necessity of reduce!
// If you are ever in a map function and you want, say, sum the array.
// Reduce is the one for the job!
//
// Additionally, it is a code smell if your map function is building external arrays.
// Use Reduce to accumulate the arrays in an accumulator object.
//
// With reduce your accumulator can be an integer, array, object, string ... etc

// You can specify the initial value of the accumulator for reduce,
// If no intial value is specified it defaults to an integer.

// Variable Declerations
var arr = [7, 1, 2, 24, 4];

var obj = { a: 7, b: 2, c: {value:3} };

const sumArray = (myArray) =>
  myArray.reduce( (accum, value, index) =>
    { return accum+=value }
  )
console.log( 'sum first', sumArray(arr) )

const defaultInteger = 0;
const sumArrayDefaultIntegerDeclared = (myArray) =>
  myArray.reduce( (accum, value, index) =>
    {
      return accum+=value
    },
    defaultInteger // 0
  )
console.log( 'sum second', sumArrayDefaultIntegerDeclared(arr) )

console.log({arr})
const defaultArray = [];
const reduceBehaveLikeMap = (myArray) =>
  myArray.reduce( (accum, value, index) =>
    {
      accum.push(value)
      return accum
    },
    defaultArray // []
  )

console.log( 'act like map:', reduceBehaveLikeMap(arr) )

const conditionForExample = (value) => value > 6
const reduceBehaveLikeFilter = (myArray) =>
  myArray.reduce( (accum, value, index) =>
    {
      if(conditionForExample(value)) {
        accum.push(value)
      }
      return accum
    },
    []
  )

console.log( 'act like filter:', reduceBehaveLikeFilter(arr) )

