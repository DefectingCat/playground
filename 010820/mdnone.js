let mdnone = document.querySelectorAll(".example-choice");
let out = document.querySelector("#example-choice-list");
let nodeArr = Array.from(mdnone);
for (i=0; i<mdnone.length; i++){
    mdnone[i].addEventListener("click",mdnxx);
}
//点掉
function mdnxx(){
    for (i=0; i<mdnone.length; i++) {
        if (mdnone[i].className === "example-choice selected"){
            mdnone[i].style = "display : none;";
            mdnone[i].className = "example-choice tag";
        }
    }
}
//恢复按钮
let allOfThem = nodeArr.every(function(item,index,arr){
    return (item.style === "display : none;")
});
if (allOfThem){
    out.insertAdjacentHTML("afterbegin",'<input id="reset11" type="button" value="恢复全部">');
    nodeArr.forEach(function(item,index,arr){
         (item.style = "display : flex;")
    });
}