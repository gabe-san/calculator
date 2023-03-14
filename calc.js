// base number operation functions
const addition = (a,b) => a + b
const subtraction = (a,b) =>  a - b
const multiplication = (a,b) => a * b
const division = (a,b) => a / b

// input variables 
var num1;
var num2;
var operator;


// input function based on input from calculator UI
const operate = function(num1, num2, operator) {
    if (operator == '+') {
        return addition(num1,num2);
    } else if (operator == '-') {
        return subtraction(num1,num2);
    } else if (operator == '*') {
        return multiplication(num1,num2);
    } else if (operator == '/') {
        return division(num1,num2);
    }
};

// console.log(operate(1,2,'*'));
// console.log(operate(9,10,'+'));
// console.log(operate(200,10,'/'));
// console.log(operate(2,20, '-'));

