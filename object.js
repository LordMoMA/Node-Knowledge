
// Object Literal Syntax
let obj = {
    property1: 'value1',
    property2: 'value2'
};

// Constructor Function
function MyObject(prop1, prop2) {
    this.property1 = prop1;
    this.property2 = prop2;
}

let obj2 = new MyObject('value1', 'value2');

// Object.create Method
let prototypeObj = {
    property1: 'value1',
    property2: 'value2'
};

let obj3 = Object.create(prototypeObj);

// Class Syntax
class MyObject {
    constructor(prop1, prop2) {
        this.property1 = prop1;
        this.property2 = prop2;
    }
}

let obj4 = new MyObject('value1', 'value2');