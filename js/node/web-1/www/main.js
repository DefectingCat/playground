const but1 = document.querySelector('.but1');
const but2 = document.querySelector('.but2');
const but3 = document.querySelector('.but3');
const button = document.querySelectorAll('#butt');
const con = document.querySelectorAll('#con');

function showInfo() {
    // 同时将三个button样式初始化
    for (let i in button) {
        button[i].className = `but${+i + 1}`;
    }
    // 添加当前点击的button一个激活的样式
    let name = this.className;
    this.className = `${name} buta`;

    for (let i in button) {
        con[i].className = `content${+i + 1}`;
    }
    let number = name.substring(3);
    con[number - 1].className = `content${number} active`;
}
but1.addEventListener('click', showInfo);
but2.addEventListener('click', showInfo);
but3.addEventListener('click', showInfo);