async function fetchData(success) {
  try {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        success ? resolve("Data loaded") : reject("Error data loaading");
      }, 2000);
    });
    return data;
  } catch (err) {
    return `Caught error: ${err}`;
  }
}
fetchData(false).then((val) => console.log(val));
