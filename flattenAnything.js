// Variable Declerations
var arr = [7, 1, 2, 3, 4];

var obj = { 
  a: {value:7}, 
  b: {value:2}, 
  c: {value:3} 
};

function reduceArray (arr) {
  return arr.reduce( (pV, cV, cI) => 
    { return arrayKeyValue(pV, cV, cI); }, 
    {keys:[], values:[]}
  );
}

function reduceObject (obj) {
  return Object.keys(obj).reduce( (pV, cV, cI) => 
    { return objectKeyValue(pV, obj, cV); }, 
    { keys:[], values:[] }
  );
}

function arrayKeyValue(pV, cV, cI) {
  pV.keys.push(`[${cI}]`); // intentionally insert '[]' for string flattening keys
  pV.values.push(cV);
  return pV // *********  Important ******
}

function objectKeyValue(pV, o, cV) {
  pV.keys.push('.'+cV) // intentionally insert '.' for string flattening keys.
  pV.values.push(o[cV].value)
  return pV // *********  Important ******
}

// Output interface.
console.log('inputs')
console.log({obj})
console.log({arr})

console.log()
console.log('outputs')

console.log('reduce obj:', reduceObject(obj))
console.log()
console.log('reduce arr:', reduceArray(arr))
