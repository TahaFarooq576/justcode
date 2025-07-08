let array=[1,2,3,'taha',"tayyab","Ahtisham"]
console.log("Your array is",array);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

console.log(array.length);
console.log(array.pop());
console.log(array.length);
console.log(array);

array.push('king');
console.log(array);

array.shift();
console.log(array);
array.unshift('development');
console.log(array);

array.splice(2,1,'alif','bay','tay');
console.log('your new array is',array);
array.splice(0,1);
console.log("Your array is",array);


console.log(array.slice(3,5));
console.log(array);

console.log(array.slice(0,3));


let object={
    a:'1',
    b:'2',
    c:'3',
    d:'4'
}
console.log("object is",object)
for (const element of object) {
    console.log(element)
}

for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element,key);
    }
}

let arR=[1,2,3,4,5,6,7,8,9,0]
arR.forEach(element => {
    console.log(element);
});


console.log(arr.sort());

let arr1=['Taha',"Tayyab","Ahtisham"];
let arr2=["Mom","Dad"];

arr.concat(arr1,arr2);
console.log(arr.concat(arr1,arr2));

//Map method

let arr=[1,2,3,4,5,6,7,8,9,0]
arr.map(e=>{
    console.log (e*e);
})
arr.map((element,index,array)=>{
    console.log(element,index,array)
})

//Filter Method
let arr7=[1,2,3,4,5,6,7,8,9,0]

console.log(arr7.reverse());

function greater5(e){
    if(e>5){
        return true;
    }
    else{
        return false;
    }
}
console.log(arr7.filter(greater5));


//Reduce method

function sum(a,b){
    return a+b;
}


arr7.reduce(sum);
console.log(arr7.reduce(sum));




