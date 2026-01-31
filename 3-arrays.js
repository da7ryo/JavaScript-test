function processNumbers(arr) {
  if (arr.length === 0) return { sum: 0, max: null, min: null, evenCount: 0 };
  const obj = {
    sum: 0,
    max: arr[0],
    min: arr[0],
    evenCount: 0,
  };
  for (let num of arr) {
    obj.sum += num;

    if (num > obj.max) {
      obj.max = num;
    }
    if (num < obj.min) {
      obj.min = num;
    }
    if (num % 2 === 0) {
      obj.evenCount++;
    }
  }
  return obj;
}

console.log(processNumbers([4, 7, 12, 19, 20]));

console.log(processNumbers([]));
