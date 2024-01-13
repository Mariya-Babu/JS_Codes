flag = 0;
slider(flag);
function control(x){
    slider(flag + x);
    flag += x;
    control(flag);
}

function slider(num){
    slides = document.getElementsByClassName('slide');
    for(let y of slides){
        y.style.display = 'none';
    }
    if(num == slides.length){
        flag = 0;
        num = 0;
    }
    if(num < 0 ){
        flag = slides.length - 1;
        num = slides.length -1;
    }
    slides[num].style.display = 'block';
}

