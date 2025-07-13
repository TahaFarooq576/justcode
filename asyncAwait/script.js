async function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Promise is working well");
            resolve("Promise resolve successfully");
            
              
        }, 5000);
    })
}

async function loaddata(){
    console.log("Hello world");
    console.log("I want to load data from get function");

    let data=await getdata();
    console.log("Data is loaded Successfully!");
    return data;
}

loaddata().then((result)=>{
    console.log(result);
})


function getrandomcolor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`
}
setInterval(() => {
    document.querySelector(".h1").style.color=getrandomcolor();
    document.body.style.background=getrandomcolor();
}, 2000);


function setdata(){
    return new Promise((resolve,reject)=>{
        setInterval(() => {
              console.log("Working on promise...");
        resolve("Promise 2 resolved successfully");
        }, 10000);
       
    })
}
async function fetchdata(){
    console.log("Working nice  ");
    console.log("You are doing well be patient");
    console.log("your data is fetching");
    let data=setdata();
    console.log("data fetched successfully");
    return data;
}

fetchdata().then((value)=>{
    console.log("Promise is resolve at value=",value)
})



function lose(){
    return new Promise((resolve,reject)=>{
        setInterval(() => {
            console.log("Promise 3");
            resolve("Promise 3 is resolved!")
        }, 12000);
    })
}


async function win(){
    console.log("Working on promise...");
    let data=lose();
    console.log("data is win");
    return data;
}


win().then((val)=>{
    console.log(val)
})