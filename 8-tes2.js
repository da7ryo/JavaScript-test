function transformNumbers(numArr) {
  let newArr = [];
  newArr = numArr
    .map((item) => {
      if (item % 2 === 0) {
        return item * 2;
      } else {
        return item;
      }
    })
    .filter((item) => item > 0);
  return newArr;
}

async function fetchData(username) {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin") {
          resolve("Welcome");
        } else {
          reject("Access denied");
        }
      }, 1000);
    });
    return result;
  } catch (error) {
    throw error;
  }
}

fetchData("admin")
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
