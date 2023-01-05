//Hoisting

console.log('logging');
// "logging"
console.log(firstName);
// undefined

console.log(sayHello());
// "What up doe!"

var firstName = "Joshua";

function sayHello() {
    console.log("What up doe!");
}