var result = [];
var patt = /,/g;

function buttonOne() {
    result.push(1);
    document.getElementById('input').innerHTML = result.join('');
}

function buttonTwo() {
    result.push(2);
    document.getElementById('input').innerHTML = result.join('');
}

function buttonThree() {
    result.push(3);
    document.getElementById('input').innerHTML = result.join('');
}

function buttonFour() {
    result.push(4);
    document.getElementById('input').innerHTML = result.join('');
}

function buttonFive() {
    result.push(5);
    document.getElementById('input').innerHTML = result.join('');
}

function buttonSix() {
    result.push(6);
    document.getElementById('input').innerHTML = result.join('');
}

function buttonSeven() {
    result.push(7);
    document.getElementById('input').innerHTML = result.join('');
}

function buttonEight() {
    result.push(8);
    document.getElementById('input').innerHTML = result.join('');
}

function buttonNine() {
    result.push(9);
    document.getElementById('input').innerHTML = result.join('');
}

function buttonZero() {
    result.push(0);
    document.getElementById('input').innerHTML = result.join('');
}

function addition() {
    result.push('+');
    document.getElementById('input').innerHTML = result.join('');
}

function subtraction() {
    result.push('-');
    document.getElementById('input').innerHTML = result.join('');
}

function multiplication() {
    result.push('*');
    document.getElementById('input').innerHTML = result.join('');
}

function division() {
    result.push('/');
    document.getElementById('input').innerHTML = result.join('');
}

function CE() {
    result.pop();
    document.getElementById('input').innerHTML = result.join('');
}

function C() {
    result.splice(0);
    document.getElementById('input').innerHTML = result.join('');
}

function executeResult() {
    let finalResult = result.toString();
    finalResult = finalResult.replace(patt, '');
    var calculate = eval(finalResult);
    document.getElementById('input').innerHTML = calculate;
}