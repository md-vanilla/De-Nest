// unused key definitions instead of using explicit values.
const oldKeyBuildArray  = ({oldKey, key}) => `${oldKey}[${key}]`
const arrKeyCallback    = (key)           => `[${key}]`
const oldKeyBuildObject = ({oldKey, key}) => `${oldKey}.${key}`
const objKeyCallback    = (key)           => `.${key}`

module.exports = {
  oldKeyBuildArray,
  arrKeyCallback,
  oldKeyBuildObject,
  objKeyCallback,
}
