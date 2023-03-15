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
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return //stop execution as period is already present
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation){
        if (this.currentOperand === '') return //operation will not execute if empty
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    compute() {
        let arithmetic;
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) { 
            return
        } 
        switch (this.operation) {
            case '+': 
                arithmetic = prev + current
                break
            case '-':
                arithmetic = prev - current
                break  
            case '×':
                arithmetic = prev * current
                break   
            case '÷':
                arithmetic = prev / current
                break
            default:
                return
        }
        this.currentOperand = arithmetic
        this.operation = undefined
        this.previousOperand = ''
    }
    getDisplayNumber(number) { //add commas 
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
      
        
      }
    updateScreen() {
       this.currentOperandTextEle.innerText = this.getDisplayNumber(this.currentOperand)
       if (this.operation != null) {
       this.previousOperandTextEle.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
       } else {
        this.previousOperandTextEle.innerText = ''
       }
    }
}

// input variables 
const numBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const allClearBtn = document.querySelector('[data-all-clear]');
const previousOperandTextEle = document.querySelector('[data-previous-operand]');
const currentOperandTextEle = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextEle, currentOperandTextEle);


// button event listeners
numBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateScreen()
     })
    })

operationBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateScreen()
     })
    })    

equalsBtn.addEventListener('click', () => {
    calculator.compute()
    calculator.updateScreen()
})

allClearBtn.addEventListener('click', () => {
    calculator.clear()
    calculator.updateScreen()
})

deleteBtn.addEventListener('click', () => {
    calculator.delete()
    calculator.updateScreen()
})