function add(a, b){
    return a+b;
}
function subtract(a, b) {
    return a-b;
}
function multiply(a, b) {
    return a*b;
}
function divide(a, b) {
    return a/b;
}

function test(){
    console.log(`${add(3, 5)}, the answer should be: 8`);
    console.log(`${subtract(10, 5)}, the answer should be 5`);
    console.log(`${multiply(3, 8)}, the answer should be 24`);
    console.log(`${divide(20, 5)}, the answer should be 4`);
}

let num1=0;
let num2=0;
let operator=".";
function operate(num1, operator, num2) {
    if (operator==="+"){
        return add(num1, num2);
    }
    else if(operator==="-"){
        return subtract(num1, num2);
    }
    else if(operator==="x" || operator==="*"){
        return multiply(num1, num2);
    }
    else if(operator==="/" || operator==="÷"){
        return divide(num1, num2);
    }
    else{
        //not an operator
    }
}