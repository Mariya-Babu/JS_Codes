let num1 = Math.round(Math.random() * 10);
let num2 = Math.round(Math.random() * 10);
let qst = document.getElementById('question');
let ans = document.getElementById('ans');
let form = document.getElementById('form');
let scr = document.getElementById('score');
let score = JSON.parse(localStorage.getItem('score'));
if(!score){
    score = 0;
}
if(score < 0){
    scr.style.color = 'red';
}
qst.innerHTML = `What is ${num1} Multioly by ${num2} ?`;
scr.innerHTML = `Score : ${score}`;
form.addEventListener('submit',function(){
    let userAns = +ans.value;
    let correctAns = num1 * num2;
    if(correctAns === userAns){
        score++;
        upadeLocalStorage();
    }
    else{
        score--;
        upadeLocalStorage();
    }
});

function upadeLocalStorage(){
    localStorage.setItem('score',JSON.stringify(score));
}
// Reset 
function setZero(){
    // alert('reset Was clicked! ');
    score = 0;
    localStorage.setItem('score',JSON.stringify(score));
}