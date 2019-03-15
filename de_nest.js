   const { oldKeyBuildArray, arrKeyCallback, oldKeyBuildObject, objKeyCallback } = require('./js_nest_helpers.js')
   const { updatePv, ecma2015ArrMerge } = require('./common_reduce_logic.js')

  const variableInfo = (obj) => {
    const oldKey = Object.keys(obj)
    const val = obj[oldKey[0]]
    return [ oldKey, val ]
  }
  const handleNested = (obj) => {
    const [ oldKey, val ] = variableInfo(obj)
    return Array.isArray(val)
      ? reduceArray(obj)
      :
      ( typeof val === 'object'
        ? reduceObject(obj)
        : val
      )
  }

  const reduceArray = (obj) => { // previous Value, currentValue, currentIndex
    const [ oldKey, val ] = variableInfo(obj)
    if(Array.isArray(val)){
    let newKeysAndValues = val.reduce( (pV, cV, cI) =>
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

  const reduceObject = (obj) => { // previous Value, currentValue, currentIndex
    const [ oldKey, val ] = variableInfo(obj)
    let newKeysAndValues = Object.keys(val).reduce( (pV, cV, cI) =>
      {
        let key = cV; let value = val[cV]
        return commonReduceLogic({key, oldKey, value, pV}, `${oldKey}.${key}`, `.${key}`)
      },
      {}
    );
    return newKeysAndValues
  }

  const commonReduceLogic = ({key, oldKey, value, pV}, currFullKey, currKey) => {
    if (typeof value === 'object') {
      let tempObj = {};
      tempObj[currFullKey]= value
      resultsObject = handleNested(tempObj)
      pV = ecma2015ArrMerge(resultsObject, pV)
    } else if(typeof value === 'undefined') { }
    else {
      pV = updatePv(pV, { key, value }, currKey, oldKey );
    }
    return pV
  }


  module.exports = {
    handleNested,
    reduceArray,
    reduceObject,
    commonReduceLogic
}
