async function fetchData(success) {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve("Data loaded");
        } else {
          reject("Error data loading");
        }
      }, 2000);
    });
    return result;
  } catch (error) {
    throw error;
  }
}

fetchData(true).then(console.log).catch(console.error);
fetchData(false).then(console.log).catch(console.error);
