function getRandomColor() {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);

    return `rgb(${a}, ${b}, ${c})`;
}

let button = document.querySelector(".btn");

button.addEventListener("click", function () {
    button.style.backgroundColor = getRandomColor();
    button.style.borderRadius = "10px";
});

setInterval(() => {
    button.style.backgroundColor = getRandomColor();
    button.style.borderRadius = "10px";
}, 10000);


