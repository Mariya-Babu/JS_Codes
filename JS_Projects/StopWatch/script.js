let hrs = 0;
let min = 0;
let sec = 0;
let count = 0;


let flag = false;
function start(){
    flag = true;
    stopWatch(flag);
}
function stop(){
    flag = false;
}
function reset(){
    flag = false;
    hrs = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById('min').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";

}
function stopWatch(){
    if(flag == true){
        count += 1;
        if(count == 99){
            sec += 1;
            count = 0;
        }
        if(sec == 60){
            min += 1;
            sec = 0;
        }
        if(min == 60){
            hrs += 1;
            min = 0;
        }
        hrsString = hrs;
        minString = min;
        secString = sec;

        if(hrsString < 10){
            hrsString = '0' + hrs;
        }
        if(minString < 10){
            minString = '0' + min;
        }
        if(secString < 10){
            secString = '0' + sec;
        }
        document.getElementById('hrs').innerHTML = hrsString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = count;
        setTimeout('stopWatch()',10);
    }
}