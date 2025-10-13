//declare and invoke function with bonus to provide default greeting
function greet(name = "friend") {
    return `Hello, ${name}! Welcome to my page.`;
}

console.log(greet("Angel"));
console.log(greet());

//parameters and returning values
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(6, 8));

//function scope
let x = 10;

function changeValue() {
    let x = 25;
    console.log("Inside the function, x =", x);
}

console.log("Before function call, x =", x);
changeValue();
console.log("After function call, x =", x);

//closures
function outerFunction() {
    let count = 0;
    return function() {
        count++;
        console.log("Current count:", count);
    }
}

let myClosure = outerFunction();

myClosure();
myClosure();
myClosure();