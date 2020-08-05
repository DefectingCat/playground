function Person(name, age) {
    this.name = name;
    this.age = age;
}
let p = new Person('test', 18);
let obj = {

}
Person.call(obj, 'xfy', 18);

function Person(name, age, tel) {
    this.name = name;
    this.age = age;
    this.tel = tel;
}
// let p = new Person('xfy', 18, 110);
function Student(name, age, tel, grade, sex) {
    Person.call(this, name, age, tel)
    this.grade = grade;
    this.sex = sex;
}
let s = new Student('xfy', 18, 120, 1, 'female');

// 工厂模式造车
//轮子
function Wheel(Wsize, Wcolor) {
    this.Wsize = Wsize;
    this.Wcolor = Wcolor;
}
//外壳
function Model(Mheight, Mwidhth, Mlen) {
    this.Mheight = Mheight;
    this.Mwidhth = Mwidhth;
    this.Mlen = Mlen;
}
//椅子
function Chair(Csize, Ccolor){
    this.Csize = Csize;
    this.Ccolor = Ccolor;
}
// 车
function Car(Wsize, Wcolor, Mheight, Mwidhth, Mlen, Csize, Ccolor) {
    Wheel.call(this, Wsize, Wcolor);
    Model.call(this, Mheight, Mwidhth, Mlen);
    Chair.call(this, Csize, Ccolor);
}
let BMW = new Car(100, 'pink', 180, 280, 1000, 200, 'red');