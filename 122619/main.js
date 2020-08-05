const btn = document.querySelector('#input');
const em = document.querySelector('#em');
btn.addEventListener('click',start);
function start(){
    if (btn.value === 'start server'){
        btn.value = "stop server";
        btn.className = "inputred";
        em.textContent = "running";
        em.className = "em2";
    }else{
        btn.value = "start server";
        btn.className = "input";
        em.textContent = "stopped";
        em.className = "em1";
    }
}