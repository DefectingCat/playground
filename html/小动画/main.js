const mat = document.querySelector('#mat');
const btn = document.querySelector('.dididi');
function doIt() {
    let name = mat.className;
    if (name === 'mat zoom-in') {
        mat.className = 'mat zoom-out';
        setTimeout(() => {
            mat.className = 'mat';
        }, 800);
    } else {
        mat.className = 'mat zoom-out';
        setTimeout(() => {
            mat.className = 'mat zoom-in';
        }, 800);
    }
}

btn.addEventListener('click', doIt);