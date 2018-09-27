function deepCloneWithKeyRemoved(obj, keyname){
  let deepClone = JSON.parse(JSON.stringify(obj))
  delete deepClone[keyname]
  return deepClone
}

var obj = { a: 7, b: 2, c: {value:3} };
console.log(
  'inputs :',obj
)
console.log(
  'outputs:',deepCloneWithKeyRemoved(obj, 'a')
)

