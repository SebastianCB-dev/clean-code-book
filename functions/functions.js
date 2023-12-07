doSomething(); // doSomething() called because of hoisting

function doSomething() {
  console.log("doSomething() called");
}

doSomething();

/* Expresion of a function */
// doSomethingTwo(); // Error: doSomethingTwo is not a function because hoisting does not work with expressions
const doSomethingTwo = function () {
  console.log("doSomething() called");
}

doSomethingTwo();

/* Arrow function */
// This works in ES6 > 
const doSomethingTree = () => 'doSomethingTree() called';
// The return is implicit, in case that you need to return an object you need to use the () to wrap the object

// Functions autoinvoked
(function () {
  console.log('autoinvoked function');
})();

// Default parameters
//Antes de ES6
function greet(text) {
  if (typeof text === 'undefined')
    text = "world";
  console.log('Hello ' + text);
}

//Con ES6
function greet(text = 'world') {
  console.log('Hello ' + text);

}
greet(); // sin parámetro. Hello world
greet(undefined); // undefined. Hello world
greet('crafter') // con parámetro. Hello crafter


// Spread operator
function doStuff(x, y, z) { }
const args = [0, 1, 2];
//con spread
doStuff(...args);
//sin spread
doStuff.apply(null, args);
//spread en funciones de math
const numbers = [9, 4, 7, 1];
Math.min(...numbers);//1

// Rest operator
function doStuff(x, y, ...args) { }
doStuff(1, 2, 3, 4, 5, 6, 7, 8, 9);
