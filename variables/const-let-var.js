/* You can define a variable with the following examples */

var variable = 5; // Avoid to use
const constant = 'AAAA-BBBB-CCCC-DDDD'; // You can modify but not asing again. Mutate like object
let name = 'Sebastián'; // Define a variable in a scope


var variable = 5;
{
  console.log('inside', variable); // 5
  var variable = 10;
}
console.log('outside', variable); // 10
variable = variable * 2;
console.log('changed', variable); // 20

/* LET */

let variable = 5;
{
  console.log('inside', variable); // error
  let variable = 10;
}
console.log('outside', variable); // 5
variable = variable * 2;
console.log('changed', variable); // 10


const variable = 5;
variable = variable * 2; // error
console.log('changed', variable); // doesn't get here