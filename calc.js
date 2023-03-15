//create object to store output and define functions within class that it will perform
class Calculator {
    constructor(previousOperandTextEle, currentOperandTextEle) {
        this.previousOperandTextEle = previousOperandTextEle;
        this.currentOperandTextEle = currentOperandTextEle;
        this.clear()
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete() {
        
    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return //stop execution as period is already present
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation){
        
    }
    compute() {
       
    }
    getDisplayNumber(number) {
      
        
      }
    updateScreen() {
       this.currentOperandTextEle.innerText = this.currentOperand
        
    }
}





// base number operation functions
// const addition = (a,b) => a + b
// const subtraction = (a,b) =>  a - b
// const multiplication = (a,b) => a * b
// const division = (a,b) => a / b

// input function based on input from calculator UI
// const operate = function(num1, num2, operator) {
//     if (operator == '+') {
//         return addition(num1,num2);
//     } else if (operator == '-') {
//         return subtraction(num1,num2);
//     } else if (operator == '*') {
//         return multiplication(num1,num2);
//     } else if (operator == '/') {
//         return division(num1,num2);
//     }
// };


// input variables 
const numBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const allClearBtn = document.querySelector('[data-all-clear]');
const previousOperandTextEle = document.querySelector('[data-previous-operand]');
const currentOperandTextEle = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextEle, currentOperandTextEle);


// event listeners
numBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateScreen()
     })
    })


    
