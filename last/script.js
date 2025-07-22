let input = document.querySelector("#input");

let addbtn=document.querySelector(".btn");
let delbtn=document.querySelector(".btn1");
let list=document.querySelector(".list");

addbtn.addEventListener("click", () => {
    let task=input.value.trim();
    if(task===""){
        alert("Nothing to enter in list");
        return;
    }

    let li=document.createElement("li");
    li.textContent=task;
    list.append(li);
    input.value="";
    input.focus();
});


delbtn.addEventListener("click",() => {
    if(list.lastChild){
        list.removeChild(list.lastChild);
    }
    else{
        alert("You have nothing to delete beacuse list is empty")
    }
});