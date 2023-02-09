function start() {

}

//function that calculates the sum of two given number
function sum(a, b) {
    return a + b;
}

//function that returns the first given number subtracted by the second one
function substract(a, b) {
    return a - b;
}

//function that returns the first given number divided by the second one
function divide(a, b) {
    return a / b;
}

//function that returns the multiplication of the two given numbers
function multiply(a, b) {
    return a * b;
}

//function that returns the first given number to the power of the second one
function power(a, b) {
    return a ** b;
}

//function that calculates the square root of a given number;
function sqrt(a) {
    return a ** (1/2);
}

//function that calculates the factorial of a given number
function factorial(a) {
    var factorial = 1;
    for (var i = 1; i <= a; i++) {
        factorial = factorial * i;
    }
    return factorial
}

//function that 
function percent(a, b) {
    return (a / b) * 100;
}

function avg(a, b) {
    return (a + b) / 2;
}

start();