let Person;
(function () {
    'use stric';
    let name = 'xfy';
    let feature = function () {
        console.log('handsome');
    }
    Person = function () {

    }
    Person.prototype.getName = function () {
        console.log(name);
    }
    Person.prototype.setName = function (value) {
        name = value;
    }
})();

let xfy = new Person();
xfy.getName();
xfy.setName('嘤嘤嘤');
xfy.getName();