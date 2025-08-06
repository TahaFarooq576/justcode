document.querySelector(".box2").style.backgroundColor="orange";

document.querySelector(".box2").style.color="black";


document.querySelector(".box3").style.backgroundColor="black"
document.querySelector(".box3").style.color="white";


function getrandomcolor(){
    let r=Math.floor(Math.random()*256);
     let g=Math.floor(Math.random()*256);
      let b=Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

setInterval(() => {
    document.querySelector(".box1").style.backgroundColor=getrandomcolor();
}, 1200);

let html=document.querySelector(".box1");
html.addEventListener("mouseover", ()=>{
    
        html.innerHTML="<b>my body has been change through javascript</b>" 
    
    
})


html.addEventListener("mousemove", ()=>{
    
        html.innerHTML="<b>hello world! i am return to my orignl html</b>" 
    
    
})
html.addEventListener("mouseout", ()=>{
    
        html.innerHTML="<b>heeeeeeeeeee😁😁</b>" 
    
    
})



let promise = new Promise((resolve,reject)=>{
    let a=Math.random()
    console.log(a)
    if (a>0.5){
        resolve("Promise resolved successfully!")
    }
    else{
        reject("Promise not resolved!")
    }

})


promise.then(e=>{
  console.log(e)
})
.catch(err=>{
    console.log(err)
})



async function check(){
    setInterval(() => {
         console.log("hello world")
    }, 6000);
    
}

function asyncawait(){
    console.log("Hello world web dev journey!")
    console.log("greetings")
    console.log("brand is brand")

    check()
   

    console.log("After some time")

}

asyncawait()




function lose(){
    return new Promise ((resolve,reject)=>{
        let b=Math.random()
        if (b<0.5){
            setInterval(() => {
                reject("random value is not enough to resolve the promise")
            }, 2000);
           
        }
        else{
            setInterval(() => {
                resolve("PROMISE RESOLVED SUCCESSFULLY!")
            }, 5000);
          
        }
    })
}

async function winner(){
    console.log("Winner function starts!")
    console.log("Working with winner function!")


    let getdata=await lose()
    console.log("Work done with winner function!")
    return getdata;

   
}



winner().then(e=>{
    console.log(e)
}).catch(err=>{
    console.log(err)
})


fetch("http://127.0.0.1:3000/images")
  .then(res => {
    if (!res.ok) throw new Error(`HTTP status ${res.status}`);
    const contentType = res.headers.get("Content-Type") || "";
    if (!contentType.includes("application/json")) {
      throw new Error(`Expected JSON, got: ${contentType}`);
    }
    return res.json();
  })
  .then(data => console.log("Parsed JSON:", data))
  .catch(err => console.error("Error:", err));



