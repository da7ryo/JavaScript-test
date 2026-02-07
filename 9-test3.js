function analyzeInput(value) {
  if (typeof value === "string") {
    return { type: "string", length: value.length };
  } else if (typeof value === "number") {
    if (value % 2 === 0) {
      return { type: "number", parity: "even" };
    } else {
      return { type: "number", parity: "odd" };
    }
  } else if (typeof value === "boolean") {
    return { type: "boolean", value: value };
  } else {
    return { type: "unknown" };
  }
}

function processArray(numbers) {
  return {
    positives: numbers.filter((item) => item > 0),
    doubled: numbers.map((item) => item * 2),
    sum: numbers.reduce((acc, item) => acc + item, 0),
  };
}

const user = {
  name: "Ivan",
  age: 30,
  address: {
    city: "Zagreb",
    country: "Croatia",
  },
};

const userCopy1 = { ...user };
const userCopy2 = structuredClone(user);

userCopy1.name = "Marko";
userCopy1.address.city = "Split";

userCopy2.address.city = "Rijeka";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `name: ${this.name}, age: ${this.age}`;
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

const emp = new Employee("Ivan", 30, "Developer");

async function fetchData(success) {
  const data = await new Promise((resolve, reject) => {
    if (success === true) {
      setTimeout(() => {
        resolve("Data loaded");
      }, 2000);
    } else {
      setTimeout(() => {
        reject("Error loading data");
      }, 2000);
    }
  });
  return data;
}

fetchData(false)
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
