const addition = function(a,b) {
    return a + b
};
const subtraction = function(a,b) {
    return a - b
};
const multiplication = function (a,b) {
    return a * b
};
const division = function(a,b) {
    return a/b
};


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