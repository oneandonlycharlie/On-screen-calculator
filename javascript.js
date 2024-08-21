// This part captures all html elements 
const buttons = document.querySelector(".buttons")
const textWindow = document.querySelector("p")
const resultWindow = document.querySelector(".value")

// This part handles all events 
buttons.addEventListener("click", handleClick)


// This part is evenhandling functions

function handleClick(e){
    let targetButton = e.target;
    let currentNumber = result
    // register user input for calculation later
    switch (targetButton.className){
        case"button-number":
        // capture numerical value
            let value = targetButton.textContent;
            append(value,resultWindow)
            break;
        case"button-operator":
            // capture operator
            let operator = targetButton.textContent;
            currentOperator = operator;
            // capture number
            currentNumber = resultWindow.textContent;
            numberList.push(currentNumber)
            // display values
            append(currentNumber,textWindow)
            append(operator,textWindow)
            refresh("",resultWindow)
            break;
        case"button-AC":
            allClear("")
            break;
        case"button-delete":
        // capture the last input    
        // find the last input and pop it from both the list and the window
            deleteLastInput(resultWindow);
            break;
        case"button-equal":
            let equalSign = targetButton.textContent;
            // capture the second number
            currentNumber = resultWindow.textContent;
            numberList.push(currentNumber)
            // only calculate when user presses equal sign
            result = calculate(currentOperator,numberList);
            // append(result,textWindow)
            refresh(result,resultWindow)
            refresh("",textWindow)
            reset(numberList,result)
            break;
        case"button-decimal":
            let decimalPoint = targetButton.textContent;
            append(decimalPoint,resultWindow)
    }
}


// This part handles display and value variables
let numberList = [];
let currentOperator = '';
let result = '';

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
    numberList.splice(0);
    result = '';
    refresh(result,textWindow);
    refresh(result,resultWindow);
}

function deleteLastInput(location){
    location.textContent = location.textContent.slice(0,-1)
}

// This part handles the logic of calculation

function calculate(operator, numbers){
    // returns the result of calculation or error message
    // if there is only 1 number, do not calculate
    // Calculation starts
    if (numbers.length >=2 && currentOperator !== ""){
        switch (operator) {
            case "+":
                // calculate result
                result = add(numbers[0],numbers[1]);
                // display result
                break;
            case "-":
                result = subtract(numbers[0],numbers[1]);
                break;
            case "x":
                result = multiply(numbers[0],numbers[1]);
                break;
            case "÷":
                result = divide(numbers[0],numbers[1]);
                break;
        };
    }
    return typeof result== "string"? result : result = Math.floor(result*100)/100
}

// This part handles opetaiton functions

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
        return "Don't do this.."
    }
    return +num1 / +num2
}