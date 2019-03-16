const { varInfo, updatePv, ecma2015ArrMerge, convertObjectToArrays } = require('./js_nest_helpers.js')

const flattenAnything = (obj) => {
  const result = handleNested(obj);
  return convertObjectToArrays(result);
}

const handleNested = (obj) => {
  const [oldKey, val] = varInfo(obj)
  return Array.isArray(val)  ? reduceArray([oldKey, val]) :
    (typeof val === 'object' ? reduceObject([oldKey, val]) : val )
}

const reduceArray = ([oldKey, val]) => { // previous Value, currentValue, currentIndex
  if (Array.isArray(val)) {
    let newKeysAndValues = val.reduce((previousValue, value, key) => {
      return commonReduceLogic({ key, oldKey, value, previousValue }, `${oldKey}[${key}]`, `[${key}]`)
    }, {});
    return newKeysAndValues
  }
  return 'What did you do 😱 , this is not an array... do not worry I will fix it.'
}

const reduceObject = ([oldKey, val]) => { // previous Value, currentValue, currentIndex
  let newKeysAndValues = Object.keys(val).reduce((previousValue, currentValue, ignore) => {
    let key = currentValue;
    let value = val[currentValue]
    return commonReduceLogic({ key, oldKey, value, previousValue }, `${oldKey}.${key}`, `.${key}`)
  }, {});
  return newKeysAndValues
}

const commonReduceLogic = ({ key, oldKey, value, previousValue }, currFullKey, currKey) => {
  if (typeof value === 'object') {
    let tempObj = {};
    tempObj[currFullKey] = value
    resultsObject = handleNested(tempObj)
    previousValue = ecma2015ArrMerge(resultsObject, previousValue)
  } else if (typeof value === 'undefined') {} else {
    previousValue = updatePv(previousValue, {
      key,
      value
    }, currKey, oldKey);
  }
  return previousValue
}

module.exports = {
  flattenAnything,
  handleNested,
  reduceArray,
  reduceObject,
  commonReduceLogic
}
