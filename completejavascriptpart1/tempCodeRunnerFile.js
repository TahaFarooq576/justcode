
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

console.log(array.reduce(reduce));