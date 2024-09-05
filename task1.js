/*

Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']

*/

const colors = ['red', 'blue', 'green', 'yellow', 'orange']
let reversed =[]

// ** for loop
// for(let i = colors.length -1 ; i >= 0; i--){
//   reversed.push(colors[i])
// }

// ** while loop
let i = 0;
while(i < colors.length){
  reversed.unshift(colors[i])
  i++
}

console.log(reversed);