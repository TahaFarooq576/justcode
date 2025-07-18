

let a = document.querySelector(".container");

a.addEventListener("click", (e) => {
    e.stopPropagation()
    a.style.backgroundColor = "purple"


})

let b = document.querySelector(".childnode");
b.addEventListener("click", () => {
    b.style.backgroundColor = "Orange"
})

let c = document.querySelector(".children1");
c.addEventListener("click", (e) => {
    e.stopPropagation()
    c.style.color = "pimk";
    c.innerHTML = "<b>I am clicked that's why my color is changed</b>"
})
let d = document.querySelector(".children2");
d.addEventListener("click", () => {
    d.style.color = "white";
    d.innerHTML = "<b>I am clicked that's why my color is changed"
})
let e = document.querySelector(".children3");
e.addEventListener("dblclick", () => {
    e.style.color = "pimk";
    e.innerHTML = "<b>I am double clicked that's why my color is changed"
})


function getrandomcolor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`
}
let g = document.body;

g.addEventListener("click", () => {
    alert("Body is clicked");
    g.style.backgroundColor = getrandomcolor();
});

setInterval(() => {
    g.style.backgroundColor=getrandomcolor();
}, 2000);