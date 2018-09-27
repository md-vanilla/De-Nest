// Variable Declerations
var arr = [7, undefined,  {value: undefined, value2: 4}, 1, 2, 3, 4];

var obj = { a: 7, b: 2, c: {value:3} };

function handleNested(val, oldKey){
  return Array.isArray(val)
    ? reduceArray(val, oldKey)
    :
    ( typeof val === 'object'
      ? reduceObject(val, oldKey)
      : val
    )
}
// unused key definitions instead of using explicit values.
const oldKeyBuildArray  = ({oldKey, key}) => `${oldKey}[${key}]`
const arrKeyCallback    = (key)           => `[${key}]`
const oldKeyBuildObject = ({oldKey, key}) => `${oldKey}.${key}`
const objKeyCallback    = (key)           => `.${key}`

function reduceArray (arr, oldKey) { // previous Value, currentValue, currentIndex
  let newKeysAndValues = arr.reduce( (pV, cV, cI) =>
    {
      let key = cI; let value = cV;
      pV = commonReduceLogic({key, oldKey, value, pV}, `${oldKey}[${key}]`, `[${key}]`)
      return pV
    },
    {} // {keys:[],values:[]}
  );
  return newKeysAndValues
}

function reduceObject (obj, oldKey) { // previous Value, currentValue, currentIndex
  let newKeysAndValues = Object.keys(obj).reduce( (pV, cV, cI) =>
    {
      let key = cV; let value = obj[cV]
      pV = commonReduceLogic({key, oldKey, value, pV}, `${oldKey}.${key}`, `.${key}`)
      return pV
    },
    {} // {keys:[],values:[]}
  );
  return newKeysAndValues
}
function commonReduceLogic({key, oldKey, value, pV}, currFullKey, currKey){
  if (typeof value === 'object') {
    resultsObject = handleNested(value, currFullKey)
    pV = ecma2018ArrMerge(resultsObject, pV)
    // pV = mergeObjects(pV, resultsObject)
  } else if(typeof value === 'undefined') { }
  else {
    pV = updatePv(pV, { key, value }, currKey, oldKey );
  }
  return pV
}
function updatePv(pV, {key, value}, currKey, oldKey) {
  pV[`${oldKey}${currKey}`] = value
  // pV.keys.push(oldKey + keyCallback(key)) // intentionally insert '.' for string flattening keys.
  // pV.values.push(value)
  return pV // *********  Important ******
}


function ecma2018ArrMerge(resultsObject, pV){
  // for alternatives check, https://stackoverflow.com/a/171256
  return {...pV, ...resultsObject}
}


// Output interface.
console.log('inputs')
console.log({obj})
console.log({arr})

console.log()
console.log('outputs')

console.log('reduce obj:', reduceObject(obj, 'obj'))
console.log('reduce obj:', handleNested(obj, 'obj'))
console.log()
console.log('reduce arr:', reduceArray(arr, 'arr'))
console.log('reduce arr:', handleNested(arr, 'arr'))
