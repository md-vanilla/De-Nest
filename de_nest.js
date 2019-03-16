const {
  varInfo,
  updatePv,
  ecma2015ArrMerge
} = require('./js_nest_helpers.js')

const handleNested = (obj) => {
  const [oldKey, val] = varInfo(obj)
  return Array.isArray(val) ?
    reduceArray([oldKey, val]) :
    (typeof val === 'object' ?
      reduceObject([oldKey, val]) :
      val
    )
}

const reduceArray = ([oldKey, val]) => { // previous Value, currentValue, currentIndex
  if (Array.isArray(val)) {
    let newKeysAndValues = val.reduce((pV, cV, cI) => {
      let key = cI;
      let value = cV;
      return commonReduceLogic({
        key,
        oldKey,
        value,
        pV
      }, `${oldKey}[${key}]`, `[${key}]`)
    }, {});
    return newKeysAndValues
  }
  return 'what did you do 😱 , ill fix it. this is not an array...'
}

const reduceObject = ([oldKey, val]) => { // previous Value, currentValue, currentIndex
  let newKeysAndValues = Object.keys(val).reduce((pV, cV, cI) => {
    let key = cV;
    let value = val[cV]
    return commonReduceLogic({
      key,
      oldKey,
      value,
      pV
    }, `${oldKey}.${key}`, `.${key}`)
  }, {});
  return newKeysAndValues
}

const commonReduceLogic = ({
  key,
  oldKey,
  value,
  pV
}, currFullKey, currKey) => {
  if (typeof value === 'object') {
    let tempObj = {};
    tempObj[currFullKey] = value
    resultsObject = handleNested(tempObj)
    pV = ecma2015ArrMerge(resultsObject, pV)
  } else if (typeof value === 'undefined') {} else {
    pV = updatePv(pV, {
      key,
      value
    }, currKey, oldKey);
  }
  return pV
}


module.exports = {
  handleNested,
  reduceArray,
  reduceObject,
  commonReduceLogic
}
