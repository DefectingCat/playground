const person = {
  name: 'xfy',
  age: 18,
};

const changeName = (person: { name: string; age: number }) => {
  person.name = 'dfy';
  person = {
    name: 'aha',
    age: 19,
  };
};

changeName(person);
console.log(person); // name: 'dfy', age: 18
