var state = {
    sum: ["A + B", 0],
    subtraction1: ["A - B", 0],
subtraction2: ["B - A", 0],
division1: ["A / B", 0],
division2: ["B / A", 0],
multiplication: ["A x B", 0],
exponentiation1: ["A ** B", 0],
exponentiation2: ["B ** A", 0],
squareRoot1: ["SQRT of A", 0],
squareRoot2: ["SQRT of B", 0],
factorial1: ["Factorial of A", 0],
factorial2: ["Factorial of B", 0],
percentage1: ["Percentage that a represents from B", 0],
percentage2: ["Percentage that B represents from A", 0],
average: ["Average of A and B", 0]}

//function that is called when the page is opened
function start() {

    render();

}

//function that calls all other render functions
function render() {

    renderInputBoxes();
    renderCalculateButton();

}

//function to calculate and render the results
function results() {

    calculate();
    renderResults();

}

//function that renders the calculate button
function renderCalculateButton() {

    var buttonDiv = document.querySelector('#button-div');
    buttonDiv.innerHTML = '';
    buttonDiv.appendChild(createCalculateButton());
}

//function that renders the input boxes
function renderInputBoxes() {

    var numbersDiv = document.querySelector("#numbers-div");
    numbersDiv.innerHTML = '';
    numbersDiv.appendChild(createFirstNumberInput());
    numbersDiv.appendChild(createSecondNumberInput());
    

}

//function that renders the results
function renderResults() {

        var resultDiv = document.querySelector("#results-div");
        resultDiv.innerHTML = '';

        var resultsUl = document.createElement('ul');
        resultsUl.innerHTML = '';
        resultsUl.id = 'results-list'

        Object.keys(state).
        forEach(x => {

            var mainUl = document.createElement('ul');
            mainUl.innerHTML = '';
            mainUl.id = 'result-node';

            var headLi = document.createElement('li');
            headLi.id = 'list-head';

            var numberLi = document.createElement('li');
            numberLi.id = 'list-result';

            headLi.textContent = state[x][0];
            numberLi.textContent = state[x][1];

            mainUl.appendChild(headLi);
            mainUl.appendChild(numberLi);

            resultsUl.append(mainUl);

            var resultLi = document.createElement('li');
            resultsUl.appendChild(resultLi);});

        resultDiv.appendChild(resultsUl);
}

//function that creates the calculate button
function createCalculateButton() {

    var button = document.createElement('button');
    button.innerHTML = '';
    button.textContent = 'Calculate';
    button.addEventListener('click', results);
    return button;

}

//function that creates the input box for the first number
function createFirstNumberInput() {

    var inputFirstNumber = document.createElement('input');
    inputFirstNumber.innerHTML = '';
    inputFirstNumber.type = 'number';
    inputFirstNumber.id = 'number1';
    inputFirstNumber.placeholder = 'Enter number 1 (A)'
    return inputFirstNumber;

}

//function that creates the input box for the second number
function createSecondNumberInput() {

    var inputSecondNumber = document.createElement('input');
    inputSecondNumber.innerHTML = '';
    inputSecondNumber.type = 'number';
    inputSecondNumber.id = 'number2';
    inputSecondNumber.placeholder = 'Enter number 2 (B)'
    return inputSecondNumber;

}


//function that gets the user input and retun them in a array
function getUserInput() {

    var number1 = Number(document.querySelector('#number1').value);
    var number2 = Number(document.querySelector('#number2').value);

    if (number1 == 0 || number2 == 0) {

        var resultDiv = document.querySelector("#results-div");
        resultDiv.innerHTML = '';
        var paragraph = document.createElement('p');
        paragraph.id = 'enter-a-number'
        paragraph.textContent = 'Enter a number for both fields'
        resultDiv.appendChild(paragraph);

    } else if (number1 < 0 || number2< 0) {

        var resultDiv = document.querySelector("#results-div");
        resultDiv.innerHTML = '';
        var paragraph = document.createElement('p');
        paragraph.id = 'enter-a-number'
        paragraph.textContent = 'Please, use only positive integers'
        resultDiv.appendChild(paragraph);

    } else {

        return [number1, number2];

    }


}

//function that makes all the operations with the two number given by the user
function calculate() {

        [number1, number2] = getUserInput();

        state.sum[1] = sum(number1, number2);
        state.subtraction1[1] = subtract(number1, number2);
        state.subtraction2[1] = subtract(number2, number1);
        state.division1[1] = divide(number1, number2);
        state.division2[1] = divide(number2, number1);
        state.multiplication[1] = multiply(number1, number2);
        state.exponentiation1[1] = power(number1, number2);
        state.exponentiation2[1] = power(number2, number1);
        state.squareRoot1[1] = sqrt(number1);
        state.squareRoot2[1] = sqrt(number2);
        state.factorial1[1] = factorial(number1);
        state.factorial2[1] = factorial(number2);
        state.percentage1[1] = percent(number1, number2) + "%";
        state.percentage2[1] = percent(number2, number1) + "%";
        state.average[1] = avg(number1, number2);

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
    return (a / b).toFixed(2);
}

//function that returns the multiplication of the two given numbers
function multiply(a, b) {
    return (a * b).toFixed(2);
}

//function that returns the first given number to the power of the second one
function power(a, b) {
    return a ** b;
}

//function that calculates the square root of a given number;
function sqrt(a) {
    if (a < 0) {
        return null;
    }
    return (a ** (1/2)).toFixed(2);
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
    return (a / b).toFixed(2) * 100;
}

//function that calculates the average of two numbers
function avg(a, b) {
    return ((a + b) / 2).toFixed(2);
}

start();