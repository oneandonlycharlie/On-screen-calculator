// This part captures all html elements and key varibles
const buttons = document.querySelector(".buttons")
const currentInput = document.querySelector(".value")

let operandList = [];
let currentOperator = '';
let result = '';
let number = '';

// This part handles all events 
buttons.addEventListener("click", handleClick)


// This part is evenhandling functions

function handleClick(e){
    let targetButton = e.target;
    switch (targetButton.className){
        case"button-number":  
            // capture number
            let digit = targetButton.textContent;
            // add an operand
            number += digit;
            currentInput.textContent = number;
            break;
        case"button-operator":
            // capture and calculate the first 2 operands
            currnetOperand = number;
            operandList.push(currnetOperand);
            // capture operator
            currentOperator = targetButton.textContent;
            number = "";
            calculate(currentOperator,operandList);
            break;
        case"button-AC":
            allClear("")
            break;
        case"button-delete": 
        // find the last digit and remove from input
            number = number.slice(0,-1);
            currentInput.textContent = number;
            break;
        case"button-equal":
            currnetOperand = number;
            operandList.push(currnetOperand);
            number = "";
            calculate(currentOperator,operandList);
            break;
        case"button-decimal":
            let decimalPoint = targetButton.textContent;
            number += decimalPoint;
            currentInput.textContent = number;     
    }
}


// This part handles the logic of calculation

function calculate(operator, operands){
    // returns the result of calculation
    // if there are not enough operands, show current number as defualt
    if (operands.length >=2 && operator !== ""){
        switch (operator) {
            case "+":
                result = add(operands[0],operands[1]);
                break;
            case "-":
                result = subtract(operands[0],operands[1]);
                break;
            case "x":
                result = multiply(operands[0],operands[1]);
                break;
            case "÷":
                result = divide(operands[0],operands[1]);
                break;
        };
        //reset for next calculation
        result = Math.floor(result*100)/100;
        currentInput.textContent = result;
        allClear();
        number = result;
    }
    

}

// This part handles display functions

function allClear(){
    // clear all inputs
    operandList.splice(0);
    currentOperator = '';
    number = '';
}

// This part handles numerical operations

function add(num1,num2){
    return +num1 + +num2
}

function subtract(num1,num2){
    return +num1 - +num2
}

function multiply(num1,num2){
    return +num1 * +num2
}

function divide(num1,num2){
    if (num2=="0"){
        allClear()
        return "Don't do this.."
    }
    return +num1 / +num2
}