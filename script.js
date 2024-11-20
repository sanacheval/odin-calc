//basic functions
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

function operate(num1, operator, num2) {
    if (operator==="+"){
        return add(num1, num2);
    }
    else if(operator==="-"){
        return subtract(num1, num2);
    }
    else if(operator==="x"){
        return multiply(num1, num2);
    }
    else if(operator==="÷"){
        return divide(num1, num2);
    }
}

//variables for calculating
let num1='';
let num2='';
let operator="";

function display() {
    let displaydiv = document.querySelector(".display");
    let buttons = document.querySelector(".buttons");
    let para = document.createElement("p");
    let btns = buttons.querySelectorAll("button");

    //tracks which number you're at (0 or 1)
    let nums=0
    //iterate through buttons so each one does something on clicking
    //depends whether it is a number or operand button
    btns.forEach(b => {
        b.addEventListener("click", () => {
            if (b.className==="number" && nums===0){
                num1+=b.textContent;
            }
            else if(b.className==="operand" && nums===0){
                operator = b.textContent;
                //moving on to second number
                nums+=1;
            }
            else if(b.className==="number" && nums===1){
                num2+=b.textContent;
            }
            else if(b.className==="operand"){
                nums++;
                operator=b.textContent;

                enter.click();
            }
            //add button text content to display
            //para.textContent+=b.textContent;
            para.textContent=num1+operator+num2;
        })
    })

    let del = document.querySelector(".delete");
    del.addEventListener("click", () => {
        if (num2!=0) {
            //we're at number 2
            //remove the last digit of it
            num2 = Math.floor(num2/10);
        }
        else if(operator!=""){
            operator="";
        }
        else if (num1!=0) {
            num1 = Math.floor(num1/10);
        }
        console.log(num2);
        //para.textContent[para.textContent.length]="";
    })
    displaydiv.appendChild(para);

    let enter = document.querySelector(".enter");
    let clear = document.querySelector(".clear");
    enter.addEventListener("click", () => {
        para.textContent=operate(num1, operator, num2);
        displaydiv.appendChild(para);
        //empty variables but leave result as first number
        num1=para.textContent;
        num2=0;
        nums=0;
        if(nums!=2){
            operator="";
        }
    })
    clear.addEventListener("click", () => {
        para.textContent=""
        displaydiv.appendChild(para);
        //empty variables
        num1=0;
        operator="";
        num2=0;
        nums=0;
    })
}

display();

function handleNumber(event) {
    const number = event.key;
    if (number==="enter") {
        console.log("You pressed 3");
    }
}
document.addEventListener('keydown', handleNumber);