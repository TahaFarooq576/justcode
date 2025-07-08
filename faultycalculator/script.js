let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
let c=prompt("Enter choice to perform calculations");
let d=Math.random();
console.log(d);

if(c=='+'&&d<0.1){
    console.log(a*b);
}
else if(c=='-'&&d<0.1){
    console.log(a+b);
}
else if(c=='*'&&d<0.1){
    console.log(a-b);

}
else if(c=='/'&&d<0.1){
    console.log(a*b);
}
else if(c=='+'&&d>0.1){
    console.log(a+b)
}
else if(c=='-'&&d>0.1){
    console.log(a-b);
}
else if(c=='*'&&d>0.1){
    console.log(a*b);

}
else if(c=='/'&&d>0.1){
    console.log(a/b);
}
else{
    console.log("Please choose '+','-','*','/'")
}