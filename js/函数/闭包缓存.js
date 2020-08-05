function eater() {
    let food = '';
    let obj = {
        name : 'xfy',
        eat : function () {
            console.log('im eating ' + food);
            food = '';
        },
        push : function (myFood) {
            food = myFood;
        }
    }
    return obj;
}
let wo = eater();
wo.push('小肥羊');
wo.eat();