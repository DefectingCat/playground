const but = document.querySelector('.but');
const url = document.querySelector('.url');
but.addEventListener('click', getUrl);

function getUrl() {
    let u = location.href;
    url.innerHTML = u;
}