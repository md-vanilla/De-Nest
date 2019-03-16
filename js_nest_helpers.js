const { handleNested } = require('./de_nest.js')

const varInfo = (obj) => {
  const oldKey = Object.keys(obj)
  const val = obj[oldKey[0]]
  return [ oldKey, val ]
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

const convertObjectToArrays = (obj) => {
  const keysArray = Object.keys(obj);
  const valuesArray = Object.values(obj);
  return { keys: keysArray, values: valuesArray }
}

module.exports = {
  varInfo,
  updatePv,
  ecma2015ArrMerge,
  convertObjectToArrays
}
