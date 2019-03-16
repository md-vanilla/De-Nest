# De Nest to flat
<br>Nest with objects; nest with arrays; deeply nest; we dont care! 😘  </br>

Print out all the keys,
<br/>Print out all the values.

<br>... this project uses a recursive function.</br>

## Examples: 
Deeply nested object, containing objects or arrays:
```javascript
const obj = { a: 7, b: 2, c: {value:3} };
console.log(handleNested({ obj }))
// output: { 'obj.a': 7, 'obj.b': 2, 'obj.c.value': 3 }

// having output in this way you could search obj and get the value from output.

const arr = [7, undefined,  {value: undefined, value2: 4}, 1, 2, 3, 4];
console.log(handleNested({arr}))
// output: { 'arr[0]': 7, 'arr[2].value2': 4, 'arr[3]': 1, 'arr[4]': 2, 'arr[5]': 3, 'arr[6]': 4 }


// example retrieval:
console.log( {result:  obj[ Object.keys(output)[1] ] } )
// { result: 4 }


// Future retrieval will have an array as the output.
// Allowing retrieval:
console.log( { result obj[ output[1] ] } )
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
