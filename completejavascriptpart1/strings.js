let string="hello world"
for (const elements of string) {
    console.log(elements)
}

let arr=Array.from(string);
arr.push('t')
console.log(arr)


arr.pop();
console.log(arr)

arr.slice(2,3);
console.log (arr)
console.log(arr.slice(2,3));
arr.splice(3,6,'talha','ahmad','ali','abdullah');
console.log(arr);



let array=[1,2,3,4,5,6,7,8,9]

function greater(e){
    if(e>5){
        return true;
    }
    else {
        return false;
    }
}
console.log(array.filter(greater));


function reduce(a,b){
    return a*b
}



