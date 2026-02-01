const user = {
  name: "Ivan",
  age: 30,
  address: {
    city: "Zagreb",
    country: "Croatia",
  },
};

const user2 = { ...user };
const user3 = structuredClone(user);

user3.address.city = "Split";
user2.name = "Zid";
console.log(user);
console.log(user2);
console.log(user3);
