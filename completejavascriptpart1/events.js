function getRandomColor() {
  const r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.backgroundColor = getRandomColor();
  });
});

// Assign listener to <p>
let p = document.querySelector(".p");
p.addEventListener('click', (e) => {
  e.stopPropagation();
  p.style.backgroundColor = getRandomColor();
});
