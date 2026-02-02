class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }
  getJobInfo() {
    return `${this.name} works as ${this.jobTitle}`;
  }
}

const p1 = new Person("Ivan", 30);
const e1 = new Employee("Ivan", 30, "Developer");
