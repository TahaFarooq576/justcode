function getrandomcolor(){
    let r=Math.floor(Math.random()*256)
    let g=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)

    return`rgb(${r},${g},${b})`
}

setInterval(() => {
    document.querySelector(".childs").style.backgroundColor=getrandomcolor();
}, 300000000);

setInterval(() => {
    let element=document.getElementsByClassName("childs");
   for(i=0;i<element.length;i++){
    element[i].style.backgroundColor=getrandomcolor();
   }
    
}, 2000);