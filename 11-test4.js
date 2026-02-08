function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
  };
}

function createTimer() {
  let count = 0;

  const intervalId = setInterval(() => {
    count++;
    console.log(count);

    if (count === 5) {
      clearInterval(intervalId); // clearInterval zaustavlja timer
    }
  }, 1000);
}

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
