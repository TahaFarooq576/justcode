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
