var greet = "Hi";
(function () {
  var greet;
  console.log(greet);// "undefined"
  greet = "Hello";
  console.log(greet); //”Hello”
})();

{
  greet()
  function greet() {
    console.log('Hello', name) // Hello undefined
    var name = 'Sebastián'
  }
}
