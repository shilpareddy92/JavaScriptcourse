function getEvenNumber(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value % 2 == 0) resolve(value);
      else reject(new Error("value is not even number"));
    }, delay);
  });
}

// promise chaining

getEvenNumber(72, 2000)
  .then((result) => {
    console.log("step 1 : gettng the result with even number: ", result);
    return getEvenNumber(4, 2000);
  })
  .then((result) => {
    console.log("step 2 : gettng the result with even number: ", result);
  })
  .catch((error) => {
    console.error("value is not even number");
  });
