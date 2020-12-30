const div = document.querySelector('.wrapper');
const content = document.querySelector('.content');
window.addEventListener('keydown', doIt);

function doIt(e) {
    content.textContent += `${e.which}`;
    switch(e.which) {
        case 37:
            div.style.left = parseInt(div.style.left) - 1 + '%';
            break;
        
        case 38:
            div.style.top = parseInt(div.style.top) - 1 + '%';
            break;
        
        case 39:
            div.style.left = parseInt(div.style.left) + 1 + '%';
            break;
        
        case 40:
            div.style.top = parseInt(div.style.top) + 1 + '%';
            break;
        
    }
}