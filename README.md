# De Nest to flat
<br>Nest with objects; nest with arrays; deeply nest; we dont care! 😘  </br>

Print out all the keys,
<br/>Print out all the values.

<br>... this project uses a recursive function.</br>

## Examples: 
Deeply nested object, containing objects or arrays:
```javascript
const obj = { a: 7, b: 2, c: {value:3} };
console.log(flattenAnything({ obj }))
// output: '{"keys":["obj.a","obj.b","obj.c.value"],"values":[7,2,3]}'

// having output in this way you could search obj and get the value from output.

const arr = [7, undefined,  {value: undefined, value2: 4}, 1, 2, 3, 4];
console.log( flattenAnything({ arr }) )
// output: {"keys":["arr[0]","arr[2].value2","arr[3]","arr[4]","arr[5]","arr[6]"],"values":[7,4,1,2,3,4]}


// example retrieval:
console.log( { result: obj[ output.keys[1] ] } )
// { result: 4 }

```

## Setup
```bash
git clone https://github.com/MichaelDimmitt/De-Nest.git
cd De-Nest
npm test
node runner
```
## Sorry <User> here, just looking for a good tutorial
no problem!

run this script to get the output:
```bash 
for d in ./tutorialsForOthers/* ; do (echo && echo "$d" && node $d); done
```

or `node <specific tutorialfile.js>`
