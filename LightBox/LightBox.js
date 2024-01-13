function includes(){
    let html = '<div id="vis-popUp"><div id="close" onclick="closePopUp()"><p>X</p></div><img  id="mainPopUpImage" src="/Images/breakfast.png" alt=""><div id="leftArrow">&lt;</div><div id="rightArrow">&gt;</div></div>';

    let popupDiv = document.createElement('div');

    popupDiv.innerHTML = html;

    document.body.insertBefore(popupDiv,document.body.firstChild);

}

let img;
let current;
// imagesPopupInit Plugin  
function imagePopupInit(target){
    img = document.getElementsByClassName(target);
    console.log(img);
    for(let i=0;i<img.length;i++){
        img[i].style.cursor = 'pointer';
        img[i].addEventListener('click',function(){
            document.getElementById('mainPopUpImage').src = this.src;
            document.getElementById('vis-popUp').style.display = 'block';
            checkArrow();
        });
    }

    includes();
    document.getElementById('leftArrow').addEventListener('click',function(){
        prevImage();
    });

    document.getElementById('rightArrow').addEventListener('click',function(){
        nextImage();
    });


}

// nextImage 
function nextImage(){
    currentImage();
    current++;
    document.getElementById('mainPopUpImage').src = img[current].src;
    checkArrow()
}

// PrevImage
function prevImage(){
    currentImage();
    current--;
    document.getElementById('mainPopUpImage').src = img[current].src;
    checkArrow()
}

function closePopUp(){
    document.getElementById('mainPopUpImage').src = "";
    document.getElementById('vis-popUp').style.display = 'none';
}


function currentImage(){
    for(let i=0;i<img.length;i++){
        if(img[i].src == document.getElementById('mainPopUpImage').src){
            current = i;
        }
    }
}
// checkArrow 
function checkArrow(){
    currentImage();
    if(current == 0){
        document.getElementById('leftArrow').style.display = 'none';
        document.getElementById('rightArrow').style.display = 'block';
    }
    else if(current == img.length - 1){
        document.getElementById('leftArrow').style.display = 'block';
        document.getElementById('rightArrow').style.display = 'none';
    }
    else{
        document.getElementById('leftArrow').style.display = 'block';
        document.getElementById('rightArrow').style.display = 'block';
    }
}