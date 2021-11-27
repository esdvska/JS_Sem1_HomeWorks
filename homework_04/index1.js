
// Extend String type with the reverse() function. The function is to reverse the value of 
// the string on which it was called.

function Person() {};
Person.prototype.sayHello = function() {
    console.log('Hello from');
}
let karol = new Person();

karol.prototype.sayHello = function() {
    console.log('From the other side');
}

console.log(karol);