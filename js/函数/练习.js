let Person;
(function () {
    'use strict'
    let v = 10;
    function pv() {
        v++;
        console.log(v);
    }

    Person = function () {};
    Person.prototype.say = function () {
        console.log(v);
    }
    Person.prototype.cha = function () {
        pv();
    }

})();

let xfy = new Person();
xfy.say();