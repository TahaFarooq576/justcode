function factorial(number){
    let array = Array.from(Array(number + 1).keys());
    let z = array.slice(1).reduce((a, b) => a * b);
    return z;
}

factorial(4);