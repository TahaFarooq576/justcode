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