class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hide!`);
  }
}

let firstTime = new Date().getTime();
setInterval(() => {
  let lastTime = new Date().getTime();
  console.log(lastTime - firstTime);
  firstTime = lastTime;
}, 1000);

let t = 1
let timer = setInterval(() => {
  console.log(t++);
}, 1000);

setTimeout(() => {
  clearInterval(timer)
}, 10000);