let ac = document.querySelector('#ac');
let display = document.querySelector('.display');
let cont = document.querySelector('.container');

let btn = document.getElementsByTagName('button');
// console.log(btn);
let val = '';
let n1= '';
let n2 = '';
let opt = '';

let btnArray = ['AC','DE','.','/',7,8,9,'*',4,5,6,'-',1,2,3,'+',0,0,'='];

function val1(){
    val += '1';
    display.innerHTML  = `${val}`;
    return 1;
}
function val2(){
    val += '2';
    display.innerHTML  = `${val}`;
    return 2;
}
function val3(){
    val += '3';
    display.innerHTML  = `${val}`;
    return 3;
}
function val4(){
    val += '4';
    display.innerHTML  = `${val}`;
    return 4;
}
function val5(){
    val += '5';
    display.innerHTML  = `${val}`;
    return 5;
}
function val6(){
    val += '6';
    display.innerHTML  = `${val}`;
    return 6;
}
function val7(){
    val += '7';
    display.innerHTML  = `${val}`;
    return 7;
}
function val8(){
    val += '8';
    display.innerHTML  = `${val}`;
    return 8;
}
function val9(){
    val += '9';
    display.innerHTML  = `${val}`;
    return 9;
}
function val0(){
    val += '0';
    display.innerHTML  = `${val}`;
    return 0;
}
function val00(){
    val += '00';
    display.innerHTML  = `${val}`;
    return 0;
}
function valAC(){
    val = '';
    display.innerHTML  = `${val}`;
}
function valDot(){
    val += '.';
    display.innerHTML  = `${val}`;
}
function valDE(){
    let len = val.length;
    val = val.substring(0,len-1);
    display.innerHTML = `${val}`;
}
function valDiv(){
    val += '/';
    display.innerHTML  = `${val}`;
    return 'Div';
}
function valStar(){
    val +='*';
    display.innerHTML  = `${val}`;
    return 'Star';
}
function valMinus(){
    val +='-';
    display.innerHTML  = `${val}`;
    return 'Minus';
}
function valPlus(){
    val += '+';
    display.innerHTML  = `${val}`;
}
function valEqual(){
    let exp = val;
    let result = eval(exp);
    display.innerHTML = `${result}`;
    console.log(val);
    val = '';
}
console.log(val);