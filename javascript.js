// This part captures all html elements and key varibles
const buttons = document.querySelector(".buttons")
const inputHistory = document.querySelector("p")
const currentInput = document.querySelector(".value")

let operandList = [];
let currentOperator = '';
let result = '';

// This part handles all events 
buttons.addEventListener("click", handleClick)


// This part is evenhandling functions

function handleClick(e){
    let targetButton = e.target;
    switch (targetButton.className){
        case"button-number":
        // capture digit
            let digit = targetButton.textContent;
            append(digit,currentInput)
            break;
        case"button-operator":
            // capture operator
            currentOperator = targetButton.textContent;
            // capture operand
            currnetOperand = currentInput.textContent;
            operandList.push(currnetOperand)
            // display inputs
            append(currnetOperand,inputHistory)
            append(currentOperator,inputHistory)
            refresh("",currentInput)
            break;
        case"button-AC":
            allClear("")
            break;
        case"button-delete": 
        // find the last digit and remove from input
            deleteLastInput(currentInput);
            break;
        case"button-equal":
            // capture the second operand
            currnetOperand = currentInput.textContent;
            operandList.push(currnetOperand)
            // only calculate when user presses equal sign
            result = calculate(currentOperator,operandList);
            refresh(result,currentInput)
            refresh("",inputHistory)
            //reset for next calculation
            reset(operandList,result)
            break;
        case"button-decimal":
            let decimalPoint = targetButton.textContent;
            append(decimalPoint,currentInput)
    }
}


// This part handles the logic of calculation

function calculate(operator, operands){
    // returns the result of calculation or error message
    // if there are not enough operands, do not calculate
    if (operands.length >=2 && currentOperator !== ""){
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
    }
    return typeof result== "string"? result : result = Math.floor(result*100)/100
}

// This part handles display functions
function reset(array,value){
    if (typeof value !== "string") {
        array.splice(0);
    }
}

function append(text,location){
    location.append(text)
}

function refresh(text,location){
    location.textContent=text;
}

function allClear(){
    // clear all inputs and history
    operandList.splice(0);
    result = '';
    refresh(result,inputHistory);
    refresh(result,currentInput);
}

function deleteLastInput(location){
    location.textContent = location.textContent.slice(0,-1)
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