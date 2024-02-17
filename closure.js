function outer (){
    let counter = 0;
    function incrementCounter (){
        counter ++; 
    }
    incrementCounter();
    return counter;
}
console.log(outer());  // Outputs: 1
console.log(outer());  // Outputs: 1
console.log(outer());  // Outputs: 1


let counter2 = 0;

function outer2 (){
    function incrementCounter2 (){
        counter2 ++; 
    }
    incrementCounter2();
    return counter2;
}

console.log(outer2());  // Outputs: 1
console.log(outer2());  // Outputs: 2
console.log(outer2());  // Outputs: 3

// basic
// console.log("Basic closure: ");
function greet(name) {
    return function() {
        console.log('Hello, ' + name);
    }
}

let greetJohn = greet('John');
greetJohn(); // Outputs: Hello, John

// closure in a loop
// console.log("closure in a loop:");
for (var i = 1; i <= 5; i++) {
    (function(index) {
        setTimeout(function() { console.log(index); }, index * 1000);
    })(i);
}

// Closure with Object Methods
// console.log("Closure with Object Methods:");

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    setTimeout(() => {
        console.log('Hello, my name is ' + this.name);
    }, 6000);
}

// Closure with Class Methods
// console.log("Closure with Class Methods:");
let david = new Person('David');
david.sayHello(); // Outputs: Hello, my name is David

class Person2 {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        setTimeout(() => {
            console.log('Hello, my name is ' + this.name);
        }, 7000);
    }
}

let helen = new Person2('Helen');
helen.sayHello(); // Outputs: Hello, my name is Helen