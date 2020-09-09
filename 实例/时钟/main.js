const timer = document.querySelector('.timer');
function clock() {
    let time = new Date();
    timer.innerHTML = time.toLocaleTimeString();
    setTimeout(clock, 1000);
}
clock();