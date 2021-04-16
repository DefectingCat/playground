var test = document.querySelector('#test');
var btn = document.querySelector('#btn');
var btnClick = function (e) {
    console.log(e.target);
    test.innerHTML = '123';
};
btn.addEventListener('click', btnClick);
