 function getrandomcolor(){
    let a=Math.floor(Math.random()*255);
     let b=Math.floor(Math.random()*255);
      let c=Math.floor(Math.random()*255);

      return `rgb(${a},${b},${c})`
 }
    setInterval(() => {
         let box1=document.querySelectorAll(".box1")
         for (let i=0;i<box1.length;i++){
            box1[i].style.backgroundColor=getrandomcolor()
         }
    }, 1000);





     setInterval(() => {
         let box1=document.querySelectorAll(".box2")
         for (let i=0;i<box1.length;i++){
            box1[i].style.backgroundColor=getrandomcolor()
         }
    }, 1000);





    setInterval(() => {
        let h1=document.getElementsByTagName("h1")
        for(let i=0;i<h1.length;i++){
          h1[i].style.backgroundColor=getrandomcolor()
        }
    }, 5000);


    setInterval(() => {
        let h2=document.getElementsByTagName("h2")
        for(let i=0;i<h2.length;i++){
            h2[i].style.backgroundColor=getrandomcolor()
            h2[i].style.color=getrandomcolor()
        }
    }, 2000);


       let b1=document.querySelector(".b1")
    b1.addEventListener("click" , ()=>{
        b1.style.backgroundColor=getrandomcolor();
    })


    let b2=document.querySelector(".b1")
    b2.addEventListener("dblclick", ()=>{
        b2.style.backgroundColor=getrandomcolor()
    })



    let element=document.createElement("h1")
    element.innerHTML="<p>I have been created through JavaScript</p>"
    
    document.querySelector(".container").append(element)




    let promise= new Promise((resolve,reject)=>{
        let a=Math.random();
        console.log(a)
        if(a<0.5){
            console.log("Not resolved!")
        }
        else{
            console.log("Promise Resolved!Congratulations")
            resolve("You are on the right path!");
        }
    })

    promise.then((a)=>{
        console.log(a)
    }).catch((e)=>{
        console.log(e)
    })


    
