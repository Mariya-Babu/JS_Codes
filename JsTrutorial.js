// Course Introduction 
// JavaScript Introduction 

// Hello World Programme 
console.log('Hello World!');
alert('Hello World!');
let prompt = prompt('Enter any Value : ');
document.write('Hello World!');
x.innerHTML = 'Hello World!';

// Comments and Statement 
// This is a Comment in JS 

// confirm
let bool = confirm(); //Returns True/False

// Type Conversion 
Number()
Boolean()
String()  

// String Manipulation 
let str = ' Hello World! This is Mariya Babu want to become a software engineer. ';
console.log(`This is a string with value ${str}`);
String.substr(index,length);
String.substring('startIndex','endIndex');
String.indexOf();
String.lastIndexOf();
String.toUpperCase();
String.toLowerCase();
String.trim();
String.trimStart();
String.trimEnd();
String.includes('string');   
String.replace('oldString','newString');
str1.concat(str2,str2,strn);
escapeCharacters 
String.length 
// Examples
// let str = '  Hello World! This is Mariya Babu want to become a software engineer.  ';
// console.log(`length = ${str.length}`);
// console.log(`UpperCase = ${str.toUpperCase()}`);
// console.log(`LowerCase = ${str.toLowerCase()}`);
// console.log(`Trim = ${str.trim()}`);
// console.log(`trimStart = ${str.trimStart()}`);
// console.log(`trimEnd = ${str.trimEnd()}`);
// console.log(`want index = ${str.indexOf('want')}`);
// console.log(`is lastIndex = ${str.lastIndexOf('is')}`);
// console.log(`from-8th-index to 30 letters ${str.substr(8,30)}`);
// console.log(`from-8th-index to 23rd-index ${str.substring(8,23)}`);
// console.log(`Replace software engineer ---> doctor \n ${str.replace('software engineer','doctor')}`);
// console.log(`concate = ${str.concat(' In america')}`);

// Arrays In JavaScript 
let arr1 = new Array();
let arr = [1,'Hello',true,'10'];
console.log();
arr.length;
arr.push(10);
arr.pop();
arr.unshift(12);  //add ele in the first index
arr.shift()     //pop ele from first index
arr.splice(2,5,12,'Hello',79,true);
arr.indexOf('Hello');
Array.isArray(arr);
arr.split(' ');
arr.join(' ');
arr.concat(arr1,arr2,arrn);

arr.forEach(myfun);
function myfun(val){
    console.log(val);
}

//Function
function add(){
    let sum = 0;
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}
add();

// Object 
let student1 = {
    Name : {
        fName : 'Nune',
        mName : 'Mariya',
        lName : 'Babu'
    },
    Id : 'N190750',
    Mobile : 8639417994,
    personalInfo : {
        email : 'N190750@rguktn.ac.in',
        address : {
            city : 'Addanki',
            village : 'VelamavariPalem',
            pin : 523201
        }
    },
    get Details(){
        console.log(`Name = ${this.Name.fName} id = ${this.Id}`);
    } ,
}
// Object Properties
delete obj.name;
for(let i in obj){
    console.log(obj[i]);
}
// Math Object
Math.round();
Math.floor();
Math.ceil();
Math.PI;
Math.E;
Math.max();
Math.min();
Math.sqrt();
Math.sin();
Math.pow();

// RandomNumbers
Math.random()


//Date Object
let d = new Date('Agu 2023 19 12:30:45');
d.getFullYear();
d.getMonth();
d.getDate();
d.getDay();
d.setDate();
d.setFullYear();
//we can compare two different dates using comparision operators

// New KeyWord 
let student = new Object();
let date = new Date();
let ary = new Array();


// Selection
let x = document.getElementById('idName');
let y = document.getElementsByClassName('className');
let z = document.getElementsByTagName('tagName');

// Query Selection
let qry1 = document.querySelector('tagName.className');
let qry2 = document.querySelector('#idName');
let qry3 = document.querySelectorAll('tagName.className');


// Change Attribute
x.setAttribute();
x.hasAttribute();
x.getAttribute('attributeName')
x.removeAttribute();

//Inline Style
x.style.cssText = 'color:red;background-color:yellow;font-size:30px;';
x.style.color = 'yellow';
x.style.cssText += 'font-size:20px;';

// Computed Css 
let h1 = document.getElementById('title');
let css = getComputedStyle(h1);
console.log(css.color);
// Change Css Class 
x.className
x.classList
x.classList.add()
x.classList.remove()
x.classList.replace()
x.classList.contains()
x.classList.toggle()


// Height  and Width 
x.offsetHeight; //border+padding+content
x.offsetWidth;
x.clientHeight; //padding+content
x.clientWidth;

// addEventListener
x.addEventListener('click',function(){ 
    console.log('DOM Event was Performed! ');
});

x.addEventListener('click',click1);
x.removeEventListener('click',click1);

// PageloadEvents 


// Click & Mouse Events 
onclick
ncontextmenu //RightClick
ondblclick
onmousedown
onmouseup
onmouseover
onmouseout
window.addEventListener('keydown',keyEvent);
function keyEvent(e){
    console.log(e.key);
}
// keyEvent
keydown --- e.key
keyup --- e.key

// Scroll Events 
scroll
wheel --- e.deltaY < 0
scroll --- window.pageYoffset > 200

// Events On Forms 
focus
blur
change --- this.value  (this == element)
input  --- this.value

// EventBubbling & EventCapture
true
false
e.stopPropagation();
e.preventDefault();

// Body Object Model 
window.x //Only variable which are declared through var 
window.Function()
window.alert()
window.confirm()

window.innerHeight  
window.innerWidth
window.outerHeight
window.outerWidth

// TimeOut TimeInterval 
setTimeout(() => {
   console.log('Hello...'); 
},2000);
setInterval(() => {
    console.log('Hello...');
},5000);
window.open(url,name,features)

// Location 
location.href
location.pathname
location.protocol
location.reload()
window.location('https://www.google.com')
location.href('https://www.google.com')
location.assign('https://www.google.com') //window.location(), location.href both will call the assign() method
location.replace('https://www.google.com') //replace will not the history


// Advanced Topics 

// RestParameters & For of Loop  Examples
function sum(...args){
    let result = 0;
    for(let i of args){
      result += i;
    }
    console.log(result);
    return result;
  }

  sum(1,8,23);
  sum(1,2,3,4,5,6,7);
  sum(9,8,7);


//   Spread Operator  Example
let arr10 = [1,2,3,4];
var arr11 = [9,8,7,6];

let arr21 = [...arr10,5,...arr11];
console.log(arr2);

let arr13 = [...arr11,-1,0,2,3,...arr10];
console.log(arr13);

// Array Destructing 
let Book = ['Will', ,200,150,'Mark Mansoon',['Abc',2023]];
let [Name,Rating,Pages,Price,Author,[Pub_Name,year]] = Book;
console.log(Name);
console.log(Pages);
console.log(Pub_Name);
console.log(Rating);

// Object Destructing 
let student11 = {
    Name1 : 'Mariya Babu',
    Id : 'N190750',
    Collage : 'RGUKT - Nuzvid',
    Address : {
      City : 'Addanki',
      Village : 'VelamavariPalem',
      Pin : 523201
    },
    Skills : ['Python','C',"C++","Java","JavaScript"]
  }

  let { Name1, Id, Collage, Address: {City,Village,Pin},Skills : p_lang } = student11;

  console.log(Name);
  console.log(Village);
  console.log(p_lang);  //ReNaming the key name 


//   Arrow Function Examples 

// Normal Function 
function add(a,b){
    return a + b;
}
console.log(add(23,77));

// Arrow Function 
let addA = (a,b) => a + b;

let double = x => x * 2;
console.log(double(9));

let squre = y => y * y;
console.log(squre(5));

// Normal Anonymous Function 
let x = document.getElementById('d');
x.addEventListener('click',function(){
console.log('Div Was Clicked!...');
});

// Arrow Anonymous Function 
x.addEventListener('mouseover',()=> console.log('Mouse Over Activated...'));

// CallBack Function Example 
function funArgs(a,b,c){
    console.log(a+b);
    c();
  }

  let a = 40;
  let b = 54;

  function sayHello(){
    console.log('Hello Friends!');
  }

  function sayHi(){
    console.log('Hi Friends!');
  }
  funArgs(a,b,sayHello);
  funArgs(23,78,sayHi);

  funArgs(45,12,function(){
    console.log('This is Anonymous function passing as an argument to another function.');
  });

  funArgs(1,2,()=>console.log('This is Arrow fun passing as an argument to another function.'));
  
//   Map Function 

let arr9 = [1,2,3,4,5,6,7]; 
// map function with anonymous function 
let arrX10 = arr9.map(function(val){
    return val * 10;
});
console.log(arrX10);

// map function with arrow function 
let arrX5 = arr9.map(val => val * 5);
console.log(arrX5);

let friends = ['Rishi','Nani','Babu','Arjun','Charan'];

let greet = friends.map(Name => `Hello ${Name}`);
console.log(greet);

// Fileter Function 

let arrF = [1,5,9,12,45,8,11,89,42,90,34];

// Filter Function using anonymous function
let arrE = arrF.filter(function(val){
  return val%2 == 0;
});
console.log(arrE);

// Filter function using arrow function
let arrG10 = arrF.filter(val => val > 10);
console.log(arrG10);


// Cookies 
document.cookie = 'Name = Mariya Babu; expires = Sat, 20 May 2023 12:00:00   UTC';
document.cookie = 'Location = India; expires = Fri, 19 May 2023 12:30:45 UTC';
document.cookie = 'Item = OPPO NKO BUDS-2;expires = 21 May 2022 01:00:00 UTC';  //If the expires date is past then it is deleted from the cookies

alert(document.cookie);

// Local  Storage
localStorage.setItem('Key','Value');
console.log(localStorage.getItem('key')); //It will return the Value of the key
localStorage.removeItem('Key');


// Local Storage  Examples
localStorage.setItem('Name','Mariya Babu');
localStorage.setItem('Name','Rishi');
localStorage.setItem('Collage','RGUKT - NUZVID');
localStorage.setItem('Collage','IIIT-NUZVID');
localStorage.setItem('Branch','CSE,ECE,EEE,MECH,CHEM');

alert(localStorage.getItem('Collage'));
alert(localStorage.getItem('Branch'));

localStorage.removeItem('Name');
localStorage.removeItem('Branch');




// Session Storage 
sessionStorage.setItem('Key','Value');
console.log(sessionStorage.getItem('Key')); //It will return the value of the key
sessionStorage.removeItem('Key');

// sessionStorage Examples 
sessionStorage.setItem('Name','Mariya Babu');
sessionStorage.setItem('Id','N190750');
sessionStorage.setItem('Branch','CSE,ECE,EEE,MECH');
sessionStorage.setItem('Collage','IIIT- NUZVID');

alert(sessionStorage.getItem('Collage'));
alert(sessionStorage.getItem('Id'));

sessionStorage.removeItem('Id');
sessionStorage.removeItem('Branch');

// JSON 
`{
    "Name" : "Rishi",
    "Age" : 25,
    "Collage" : "IIIT - Nuzivd",
    "Passcode_No" : true,
    "Address" : {
        "City" : "Addanki",
        "Village" : "VelamavariPalem",
        "PinCode" : 523201
    },
    "Skills" : ["FrontEnd","BackEnd","FullStack","DataSceintist","UI/UX"]
}`;

let studentJ = {
    "Name" : "Rishi",
    "Age" : 25,
    "Collage" : "IIIT - Nuzivd",
    "Passcode_No" : true,
    "Address" : {
        "City" : "Addanki",
        "Village" : "VelamavariPalem",
        "PinCode" : 523201
    },
    "Skills" : ["FrontEnd","BackEnd","FullStack","DataSceintist","UI/UX"]
}


// JSON Parsing Example 
let data = `{
    "Name" : "Mariya Babu",
    "Id" : "N190750",
    "Hobby" : "Coding",
    "Value" : null,
    "Ture/False" : true,
    "Skills" : ["Python","C","C++","Java","JavaScript"],
    "Address" : {
        "City" : "Addanki",
        "Village" : "VelamavariPalem",
        "PinCode" : 523201
    }
}`;
console.log(data);


let dO = JSON.parse(data);
console.log(dO);
console.log(dO.Name);
console.log(dO.Skills[2]);
console.log(dO['Address']['Village']);


// JSON Stringify
let studentObj = {
    'Name' : 'Mariya Babu',
    'Id' : 'N190750',
    'Collage' : 'IIIT - NUZVID',
    'Skills' : ['Python','C','C++','Java','JavaScript'],
    'Address' : {
      'City' : 'Addanki',
      'Village' : 'VelamavariPalem',
      'PinCode' : 523201
    }
  }

  console.log(studentObj);

  let std = JSON.stringify(studentObj);
  console.log(std);

//   Inheritance Before ES-6 (Prototype) 
// syntax 
/*Child Class*/ClassName.prototype__proto__ = Object.create(/*Parent Class */ClassName.prototype);

// Example Inheritance 

Std.prototype__proto__ = Object.create(Person.prototype); //    Type - 1   (__proto / prototype)
Std.prototype__prototype__ = Human.prototype;     //    Type - 2    

// Mixin Example 
Object.assign(Mng.prototype, ex1);
Object.assign(Mng.prototype,ex2);