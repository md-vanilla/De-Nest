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

const reduceArray = (arr, oldKey) => { // previous Value, currentValue, currentIndex
  if(Array.isArray(arr)){
  let newKeysAndValues = arr.reduce( (pV, cV, cI) =>
    {
      let key = cI; let value = cV;
      return commonReduceLogic({key, oldKey, value, pV}, `${oldKey}[${key}]`, `[${key}]`)
    },
    {}
  );
    return newKeysAndValues
  }
  return 'what did you do 😱 , ill fix it. this is not an array...'
}

const reduceObject = (obj, oldKey) => { // previous Value, currentValue, currentIndex
  let newKeysAndValues = Object.keys(obj).reduce( (pV, cV, cI) =>
    {
      let key = cV; let value = obj[cV]
      return commonReduceLogic({key, oldKey, value, pV}, `${oldKey}.${key}`, `.${key}`)
    },
    {}
  );
  return newKeysAndValues
}

const commonReduceLogic = ({key, oldKey, value, pV}, currFullKey, currKey) => {
  if (typeof value === 'object') {
    resultsObject = handleNested(value, currFullKey)
    pV = ecma2015ArrMerge(resultsObject, pV)
  } else if(typeof value === 'undefined') { }
  else {
    pV = updatePv(pV, { key, value }, currKey, oldKey );
  }
  return pV
}

const updatePv = (pV, {key, value}, currKey, oldKey) => {
  pV[`${oldKey}${currKey}`] = value
  return pV 
}

const ecma2015ArrMerge = (resultsObject, pV) => {
  
  // ecma2015ObjectMerge
  return Object.assign(pV, resultsObject);
  
  // ecma2017 object merge ... this was removed because the test suite did not support 2017
  // return {...pV, ...resultsObject}
  
}

module.exports = {
  handleNested,
  oldKeyBuildArray,
  arrKeyCallback,
  oldKeyBuildObject,
  objKeyCallback,
  reduceArray,
  reduceObject,
  commonReduceLogic,
  updatePv,
  ecma2015ArrMerge
}
