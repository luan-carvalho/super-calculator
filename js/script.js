//function that is called when the page is opened
function start() {

    render();

}

//function that calls all other render functions
function render() {

    renderInputBoxes();
    renderCalculateButton();
    renderResults();

}

//function that render the calculate button
function renderCalculateButton() {

    var buttonDiv = document.querySelector('#button');
    buttonDiv.innerHTML = '';
    buttonDiv.appendChild(createCalculateButton());
}

//function that renders the input boxes
function renderInputBoxes() {

    var numbersDiv = document.querySelector("#numbers");
    numbersDiv.innerHTML = '';
    numbersDiv.appendChild(createFirstNumberInput());
    numbersDiv.appendChild(createSecondNumberInput());
    

}
//function that creates the calculate button
function createCalculateButton() {

    var button = document.createElement('button');
    button.innerHTML = '';
    button.textContent = 'Calculate';
    button.addEventListener('click', calculate);
    return button;

}

//function that creates the input box for the first number
function createFirstNumberInput() {

    var inputFirstNumber = document.createElement('input');
    inputFirstNumber.innerHTML = '';
    inputFirstNumber.type = 'number';
    inputFirstNumber.placeholder = 'Enter number 1'
    return inputFirstNumber;

}

//function that creates the input box for the second number
function createSecondNumberInput() {

    var inputSecondNumber = document.createElement('input');
    inputSecondNumber.innerHTML = '';
    inputSecondNumber.type = 'number';
    inputSecondNumber.placeholder = 'Enter number 2'
    return inputSecondNumber;

}

function calculate() {
    console.log("macaco");
}

//function that calculates the sum of two given number
function sum(a, b) {
    return a + b;
}

//function that returns the first given number subtracted by the second one
function subtract(a, b) {
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

//function that calculates the percentage that the first number represents from the second one
function percent(a, b) {
    return (a / b) * 100;
}

//function that calculates the average of two numbers
function avg(a, b) {
    return (a + b) / 2;
}

start();