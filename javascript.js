// This part captures all html elements 
const buttons = document.querySelector(".buttons")


// This part handles all events 
buttons.addEventListener("click", handleClick)


// This part is evenhandling functions
// 这里需要改成：点运算符和点等号结果一样，只是等号不会储存下一个运算符
function handleClick(e){
    let targetButton = e.target;
    switch (targetButton.className){
        case"button-number":
        // capture number 
            let number = targetButton.textContent;
        // add text to display window
            numberList.push(number);
            break;
        case"button-operator":
        // capture operator
            let operator = targetButton.textContent;
        // add text to display window
            operatorList.push(operator);
            break;
        case"button-AC":
        // clear user input
            result = '';
            break;
        case"button-delete":
        // capture the last input    
        // find the last input and pop it from both the list and the window
            delete(lastInput);
            break;
        case"button-equal":
        // start calculation
            calculate();
            break;
    }
}


// This part handles display and error reminders
let numberList = []
let operatorList = []
let value = 0


// This part handles the logic of calculation

function calculate(operatorList, ...numberList){
    /*
    1. when numberList has 2 or more numbers and operatorList has 1 number,
        - start calculation and return value as the input of next calculation
        - show value
    2. else, return an error massage, display the string and clear display and result.
    2. After calculation
        update the numberList and operator list so they are ready for the next calculation
    3. if there are not enough numbers and operator, raise error
    4. if calculation returns an error message / string, display the string and clear display and result.
    */
}

// This part handles opetaiton functions

function add(num1,num2){
    return num1+num2
}

function subtract(num1,num2){
    return num1-num2
}

function multiply(num1,num2){
    return num1*num2
}

function divide(num1,num2){
    if (num2=0){
        //returns an error message 
    }
    return num1/num2
}