const { handleNested } = require('./de_nest.js')
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
  updatePv,
  ecma2015ArrMerge
}
