console.log("Ali is aa hacker!");
console.log("Abdullah is also aa hacker");
setTimeout(() => {
    console.log("First timeout function!")
}, 6000);

setTimeout(() => {
    console.log("Second Timeout function")
}, 1000);

console.log("Hey brother where are you going!");

// call back functions

function callback(a) {
    console.log(a)
}
let Loadscript = (src, callback) => {
    let sc = document.createElement("Script");
    sc.src = src;
    sc.onload = () => callback("Call back function is called successfully!");
    document.head.appendChild(sc);
    console.log(sc.isConnected);
}

Loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)


// Promises in JavaScript

let promise1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("Your promise is rejected")
    }
    else {
        setTimeout(() => {
            console.log("Promise is worked properly")
            resolve("Successfully");
        }, 2000);
    }
    })

promise1.then((a) => {
    console.log(a)
}).catch((e)=>{
    console.log(e)
})

let another=new Promise((resolve,reject)=>{
    let a=Math.random()
    if(a<0.5){
        reject("Rejected sorry!")
    }
    else{
    setTimeout(() => {
        console.log("Promise is working good")
        resolve("Taha");
    }, 3000);
}
})

another.then((e)=>{
    console.log(e)
}).catch((error)=>{
    console.log(Error)
})

   let p3= Promise.all([promise1,another])
   p3.then((a)=>{
    console.log(a)
   }).catch((erroe)=>{
    console.log(erroe)
   })



