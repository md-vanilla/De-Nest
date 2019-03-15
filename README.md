# De Nest to flat
<br>nest with objects; nest with arrays; deeply nest; we dont care! 😘  </br>

just print out all the keys, 

just print out all the values. format the stuff do the things.

key values that are nested need to be key1.key2.
<br>... hint, use a recursive function.</br>

## Examples: 
Deeply nested object, containing objects or arrays:
```javascript
const obj = { a: 7, b: 2, c: {value:3} };
console.log(handleNested({ obj }))
// output: { 'obj.a': 7, 'obj.b': 2, 'obj.c.value': 3 }

const arr = [7, undefined,  {value: undefined, value2: 4}, 1, 2, 3, 4];
console.log(handleNested({arr}))
// output: { 'arr[0]': 7, 'arr[2].value2': 4, 'arr[3]': 1, 'arr[4]': 2, 'arr[5]': 3, 'arr[6]': 4 }
```



## Setup
```bash
git clone https://github.com/MichaelDimmitt/De-Nest.git
cd De-Nest
npm test
node runner
```
## Sorry <User> just here for a good tutorial
no problem!

run this script to get the output:
```bash 
for d in ./tutorialsForOthers/* ; do (echo && echo "$d" && node $d); done
```

or `node <specific tutorialfile.js>`
