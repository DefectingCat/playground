class Person {
  constructor(
    protected _firstname: string,
    protected _lastname: string,
    protected _ssn: string,
    protected _address: Address
  ) {}

  get ssn() {
    return this._ssn;
  }

  get firstname() {
    return this._firstname;
  }

  get lastname() {
    return this._lastname;
  }

  get address() {
    return this._address;
  }

  set address(addr: Address) {
    this._address = addr;
  }

  peopleInSameCountry(friends: Person[] | Student[]) {
    const result: (Person | Student)[] = [];
    for (const person of friends) {
      if (this.address.country === person.address.country) {
        result.push(person);
      }
    }
    return result;
  }

  toString() {
    return `Person (${this._firstname}, ${this._lastname})`;
  }
}

class Student extends Person {
  constructor(
    firstname: string,
    lastname: string,
    ssn: string,
    address: Address,
    private _school: string
  ) {
    super(firstname, lastname, ssn, address);
  }

  get school() {
    return this._school;
  }

  studentInSameCountryAndSchool(firends: Student[]) {
    const closeFirends = this.peopleInSameCountry(firends);
    const result: Student[] = [];
    for (const person of closeFirends) {
      if ('school' in person) {
        if (this.school === person.school) {
          result.push(person);
        }
      }
    }
    return result;
  }
}

class Address {
  constructor(public country: string) {}
}

const s1 = new Student('s1', 's1', '123456', new Address('China'), 'A');
const s2 = new Student('s2', 's2', '133456', new Address('Russia'), 'B');
const s3 = new Student('s3', 's3', '143456', new Address('China'), 'A');
const s4 = new Student('s4', 's4', '243456', new Address('Japan'), 'A');
const s5 = new Student('s5', 's5', '343456', new Address('China'), 'B');

console.log('Class:', s1.studentInSameCountryAndSchool([s2, s3, s4, s5]));

interface Selector {
  (country: string, school: string): FilterSelector;
}
interface FilterSelector {
  (student: Student): boolean;
}
const selector: Selector = (country, school) => {
  return function (student) {
    return student.address.country === country && student.school === school;
  };
};
const findStudentBy = (firends: Student[], selector: FilterSelector) => {
  return firends.filter(selector);
};

console.log(
  'function:',
  findStudentBy([s2, s3, s4, s5], selector(s1.address.country, s1.school))
);
