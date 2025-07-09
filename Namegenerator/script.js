let a;
let b;
let c;
let d=Math.random();

if(d<0.3){
    a="crazy";
}
else if(d>0.3&&d<0.6){
    a="Amaizing"
}
else{
    a="Fire";
}

let e=Math.random();

if(e<0.3){
    b="Engine";
}
else if(e>0.3&&e<0.6){
    b="Foods"
}
else{
    b="Garments";
}


let f=Math.random();

if(f<0.3){
    c="Bros";
}
else if(f>0.3&&f<0.6){
    c="Limited"
}
else{
    c="Hub";
}

console.log("Your Business name");
console.log(a +b +c);

//Factorial program

let fact=1;
let n=4

for(let i=1; i<=n;i++){
    fact=fact*i;

}
console.log("Your factorial is=",fact);

//Factorial program using reduce method

function factorial(number){
    let array = Array.from(Array(number + 1).keys());
    let z = array.slice(1).reduce((a, b) => a * b);
    return z;
}

factorial(4);
