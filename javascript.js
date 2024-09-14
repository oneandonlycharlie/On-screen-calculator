// This part captures all html elements and key varibles
const buttons = document.querySelector(".buttons")
const currentInput = document.querySelector(".value")
buttons.addEventListener("click", handleClick)


let currentOperator = '';
let number = '';
let operand = '';

// This part is evenhandling function 
function handleClick(e){
    let targetButton = e.target;
    switch (targetButton.className){
        case"button-number":  
            // capture number
            let digit = targetButton.textContent;
            number += digit;
            currentInput.textContent = number;
            break;
        case"button-operator":
            // capture operator
            if (operand != "" && currentOperator!= "" && operand !=currentInput.textContent){
                calculate(currentOperator, operand, currentInput.textContent)
            } else {
                operand = currentInput.textContent;
            }
            currentOperator = targetButton.textContent;
            number = "";
            break;
        case"button-AC":
            allClear();
            currentInput.textContent = "";
            number = "";
            break;
        case"button-delete": 
        // find the last digit and remove from input
            currentInput.textContent = currentInput.textContent.slice(0,-1);
            number = currentInput.textContent;
            break;
        case"button-equal":
            calculate(currentOperator,operand,currentInput.textContent)
            allClear();
            number = "";
            break;
        case"button-decimal":
            let decimalPoint = targetButton.textContent;
            number += decimalPoint;
            currentInput.textContent = number;     
    }
}


// This part handles the logic of calculation

function calculate(operator, firstInput, secondInput){
    // returns the result of calculation
    // if there are not enough operands, show current number as defualt
    let result = '';
        switch (operator) {
            case "+":
                result = add(firstInput,secondInput);
                break;
            case "-":
                result = subtract(firstInput,secondInput);
                break;
            case "x":
                result = multiply(firstInput,secondInput);
                break;
            case "÷":
                result = divide(firstInput,secondInput);
                break;
        };
        //reset for next calculation
        result = typeof result == "number"? Math.floor(result*100)/100 : result;
        currentInput.textContent = result;
        currentOperator = '';
        operand = result;  
        return operand
}

// This part handles display functions

function allClear(){
    // clear all inputs
    operand = '';
    currentOperator = '';
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
    if (num2 == "0"){
        allClear()
        return "Don't do this.."  
    }
    return +num1 / +num2
}