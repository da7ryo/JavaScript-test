function formatUser(name, age) {
  if (typeof name !== "string") {
    return "Invalid name";
  } else if (typeof age !== "number") {
    return "Invalid age";
  } else {
    return `Name: ${name}, Age: ${age}`;
  }
}

console.log(formatUser("Ivan", 30));

const isAdult = (age) => (age >= 18 ? true : false);
console.log(isAdult(20));

function getStats(numbers) {
  let obj = {
    total: 0,
    average: 0,
    positives: 0,
  };

  for (let number of numbers) {
    obj.total += number;
    obj.average = obj.total / numbers.length;
    if (number > 0) {
      obj.positives++;
    }
  }
  return obj;
}

console.log(getStats([1, 2, 3, 4, 5]));

class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  getCarInfo() {
    return `Brand: ${this.brand}, Year: ${this.year}`;
  }
}

class ElectricCar extends Car {
  constructor(brand, year, batteryLevel) {
    super(brand, year);
    this.batteryLevel = batteryLevel;
  }

  getBatteryInfo() {
    return `Battery: ${this.batteryLevel} %`;
  }
}

const car = new Car("BMW", 2020);
const eCar = new ElectricCar("BMW", 2020, 80);

console.log(car.getCarInfo());
console.log(eCar.getBatteryInfo());

async function loginUser(username) {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin") {
          resolve("Welcome admin");
        } else {
          reject("Access denied");
        }
      }, 1500);
    });
    return result;
  } catch (error) {
    throw error;
  }
}

loginUser("admin")
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
