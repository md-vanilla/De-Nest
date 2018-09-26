// Variable Declerations
var arr = [7, 1, 2, 3, 4];

var obj = { a: 7, b: 2, c: {value:3} };

function handleNested(val){
  return Array.isArray(val)
    ? reduceArray(val) 
    : 
    ( typeof val === 'object' 
      ? reduceObject(val) 
      : val
    )
}

function reduceArray (arr) { // previous Value, currentValue, currentIndex
  return arr.reduce( (pV, cV, cI) =>
    { return updatePv(pV, { key: cI, value: cV }, arrKey); },
    {keys:[], values:[]}
  );
}

function reduceObject (obj) { // previous Value, currentValue, currentIndex
  return Object.keys(obj).reduce( (pV, cV, cI) =>
    { return updatePv(pV, { key: cV, value: obj[cV] }, objKey ); },
    { keys:[], values:[] }
  );
}

// spec pV =  { keys:[], values:[] }
function updatePv(pV, {key, value}, keyCallback) {
  pV.keys.push(keyCallback(key)) // intentionally insert '.' for string flattening keys.
  pV.values.push(value)
  return pV // *********  Important ******
}

function objKey(key){
  return '.'+key
}
function arrKey(key){
  return `[${key}]`
}


// Output interface.
console.log('inputs')
console.log({obj})
console.log({arr})

console.log()
console.log('outputs')

console.log('reduce obj:', reduceObject(obj))
console.log('reduce obj:', handleNested(obj))
console.log()
console.log('reduce arr:', reduceArray(arr))
console.log('reduce arr:', handleNested(arr))
