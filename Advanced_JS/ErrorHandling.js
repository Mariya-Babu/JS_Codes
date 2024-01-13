let fs = require('fs');

try{
    fs.readFile('./sample.txt','base64',(e,data)=>{
        console.log(data);
    })
}
catch(e){
    // console.log(e);
    console.log('Error Has Occurred!');
}