



function op(Name){
    console.log(Name);
    console.log("My name is", Name ,"and i am learning web dev course");
     console.log("My name is", Name ,"and i am learning web dev course");
     console.log("My name is", Name, "and i am learning web dev course");
     console.log("My name is", Name, "and i am learning web dev course");
}

op("Baber");


function sum (num1,num2){
    console.log("Sum of two numbers is",num1+num2)
}
sum(15,2);


function sum(a,b,c=3){
    return a+b+c;
}

result=sum(2,3);
console.log("Your sum=",result)



let string="Taha Farooq"
console.log("string is",string);
console.log(string[0]);
console.log(string[1]);
console.log(string[2]);
console.log(string[3]);
console.log(string[0]);
console.log(string[4]);
console.log(string[13]);

console.log(string.toLocaleUpperCase());
console.log(string.replace("ha","aha"));
console.log(string.substring());
console.log(string.lastIndexOf());
console.log(string.charCodeAt(2));
console.log(string.charAt(2));

let string1="Taha Farooq"
console.log(string1.concat("ali")+"tayyab");



//Faulty calculator.........


let a=10
let b=13
let c=Math.random();
console.log(a,b,c);



let z=0;
for (let index = 0; index <= 10; index++) {
    console.log(z+index);
    
}

//program that prints even number from 1 to 20.

let t=0;
for (let index = 0; index <= 20; index+=2) {
    console.log(t+index);
    
}

//program that print odd numbers from 1 to 20
let w=1;
for (let index = 0; index <= 20; index+=2) {
    console.log(w+index);
    
}
//  progrfam that shows marks of aa student from an object

let obj={
    Math:"90",
    Science:"85",
    Physics:"72",
    Chemistry:"75",
    Urdu:"71",
    "Pak Studies":"48"
}

// for (const key in obj) {
//    console.log(key,value);
//     }

    for (const key in obj) {
        
            const element = obj[key];
            console.log(element);
        
    }



    //for of loop practice

let newstring="Coding Javascript"
for (const element of newstring) {
    console.log(element);
}

