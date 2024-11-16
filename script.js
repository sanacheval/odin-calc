function add(a, b){
    return Number(a)+Number(b);
}
function subtract(a, b) {
    return Number(a)-Number(b);
}
function multiply(a, b) {
    return a*b;
}
function divide(a, b) {
    return a/b;
}
let num1=0;
let num2=0;
let operator=".";
function display() {
    let displaydiv = document.querySelector(".display");
    let buttons = document.querySelector(".buttons");
    let para = document.createElement("p");
    let btns = buttons.querySelectorAll("button");
    let clickcount=0
    btns.forEach(b => {
        b.addEventListener("click", () => {
            if (clickcount===0){
                num1 = b.textContent;
                clickcount++;
            }
            else if(clickcount===1){
                operator = b.textContent;
                clickcount++;
            }
            else{
                num2 = b.textContent;
                clickcount=0;
            }
            para.textContent+=b.textContent;
        })
    })
    displaydiv.appendChild(para);
    let enter = document.querySelector(".enter");
    let clear = document.querySelector(".clear");
    enter.addEventListener("click", () => {
        para.textContent=operate(num1, operator, num2);
        displaydiv.appendChild(para);
    })
    clear.addEventListener("click", () => {
        para.textContent=""
        displaydiv.appendChild(para);
    })
}

display();

function test(){
    console.log(`${add(3, 5)}, the answer should be: 8`);
    console.log(`${subtract(10, 5)}, the answer should be 5`);
    console.log(`${multiply(3, 8)}, the answer should be 24`);
    console.log(`${divide(20, 5)}, the answer should be 4`);
}

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