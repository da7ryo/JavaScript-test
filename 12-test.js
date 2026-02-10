// ovdje ne razumijem najbolje logiku
function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}

// ovdje sam zapeo
function countVowels(string) {
  let count = 0;
  let vowels = "aeiou";
  string = string.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  return count;
}
// ovdje mi treba dodatno pojasnjenje
function removeDuplicates(numbers) {
  return numbers.filter((item, pos) => numbers.indexOf(item) == pos);
}

let products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 500 },
];

function getTotalPrice(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    let currentObj = products[i];
    sum += currentObj.price;
  }
  return sum;
}

function formatUserNames(name) {
  return name.toUpperCase();
}

function applyDiscount(price, callback) {
  return callback(price);
}

function tenPrecentDiscount(price) {
  return price - (price / 100) * 10;
}

function twentyPercentDiscount(price) {
  return price - (price / 100) * 20;
}

console.log(applyDiscount(100, tenPrecentDiscount));
console.log(applyDiscount(200, twentyPercentDiscount));

function fetchData(success) {
  return new Promise((resolve, reject) => {
    success ? resolve("Data fetched") : reject("Fetch error");
  });
}

fetchData(false)
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

function processOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Order processed");
    }, 1000);
  });
}

processOrder().then(() => console.log("Email sent"));

class Counter {
  constructor(count) {
    this.count = count;
  }

  increment(amount) {
    this.count += amount;
  }

  decrement(amount) {
    this.count -= amount;
  }

  getValue() {
    return this.count;
  }
}

let users = [
  { username: "Dario" },
  { username: "Ivan" },
  { username: "Ana" },
  { username: "Marija" },
];

function findUser(username, users) {
  for (let i = 0; i < users.length; i++) {
    let currentPer = users[i];
    if (currentPer.username === username) {
      return currentPer;
    }
  }
  return "User not found";
}

console.log(findUser("Dario", users));
