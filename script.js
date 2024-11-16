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