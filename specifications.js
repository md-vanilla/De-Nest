//what is the goal

const impediment1 = { uname: 'susan', value1: {value: 9}, value2: 13},
  const goal = {
    keys: [ 'uname','value1.value', 'value2' ],
    values: ['susan', 9, 13]
  }
const impediment2 = [
  { uname: 'susan', value1: {value: 9}, value2: 13},
  { uname: 'susan', value1: {value: 9}, value2: 13}
]
const goal2 = {
  keys: [
  '[0]uname','[0]value1.value', '[0]value2',
  '[1]uname','[1]value1.value', '[1]value2' ]
  values: [
    'susan', 9, 13,
    'susan', 9, 13 ]
}
