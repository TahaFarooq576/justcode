// document.getElementById("color").style.backgroundColor="yellow";


// let a=document.getElementsByClassName("box");
// a.style.Math.random(backgroundColor);


// let b=document.getElementsByClassName("box")
// a[2].style.color="blue";


// document.querySelector(".box")
// .style.backgroundColor="blue"

// let c=document.querySelectorAll(".box");
// c.forEach(e=>{
// e.style.backgroundColor="yellow"
// })


function getrandomcolor(){
    let a=Math.floor(0+Math.random()*255)
    let b=Math.floor(0+Math.random()*255)
    let c=Math.floor(0+Math.random()*255)
    return `rgb(${a}, ${b}, ${c})`;

}
// let d=document.getElementsByClassName("box");
// for(let i=0;i<=d.length;i++){
//     d[i].style.backgroundColor=getrandomcolor()
// }

setInterval(() => {
   const boxes = document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
  boxes[i].style.backgroundColor = getrandomcolor();
}
 
}, 2000);










