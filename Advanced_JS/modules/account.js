let acNo = 123467889;
let acType = 'Saving...';

function withdraw(){
    console.log('Money deducted...');
}

function deposite(){
    console.log('Balance Updated...');
}

export function sayHi(){
    console.log('Hello Account Holder...');
}

export default function(){
    console.log('This is account default function!');
}
export{withdraw, deposite};
