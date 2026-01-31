function getMax(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

const getMax2 = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};

const getMax3 = (num1, num2) => (num1 > num2 ? num1 : num2);

console.log(getMax(2, 5));
console.log(getMax2(4, 2));
console.log(getMax3(10, 2));
