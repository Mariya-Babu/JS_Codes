let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let ampm = document.getElementById('amPm');
function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    ampm.innerHTML = 'Am';
    if(h > 12 ){
        h = h - 12;
        ampm.innerHTML = 'PM';
    }

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    hrs.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;

    setTimeout('updateClock()',1000);
}
updateClock();