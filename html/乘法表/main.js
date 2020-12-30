let wrapper,
    cont,
    fragment;

window.onload = function () {
    wrapper = document.querySelector('.wrapper');
    fragment = document.createDocumentFragment();

    function x99() {
        for (let i = 1; i <= 9; i++) {
            for (let o = 1; o <= i; o++) {
                cont = fragment.appendChild(document.createElement('span'));
                cont.textContent = `${i} ✖ ${o} ＝ ${i * o}`;
            }
            fragment.appendChild(document.createElement('br'));
        }
        wrapper.appendChild(fragment);
    }
    x99();
}