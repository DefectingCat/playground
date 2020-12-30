let wrapper = document.querySelector('.wrapper');
let content = document.querySelector('.content');
let bg = content.style.backgroundImage;

let r,
    g,
    b,
    r1,
    g1,
    b1;

wrapper.addEventListener('click', () => {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    r1 = Math.floor(Math.random() * 255);
    g1 = Math.floor(Math.random() * 255);
    b1 = Math.floor(Math.random() * 255);
    content.style.backgroundImage = `linear-gradient(rgb(${r}, ${g}, ${b}), rgb(${r1}, ${g1}, ${b1}))`;
});