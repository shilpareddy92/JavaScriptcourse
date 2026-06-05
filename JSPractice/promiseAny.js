// It's used for handling multiple promises and resolving with the value of the first fulfilled/resolved promise, similar to Promise.race(). 
// However, unlike Promise.race(), Promise.any() doesn't reject immediately when the first promise rejects; 
// instead, it waits until at least one promise fulfills/resolved.

const getMessage = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //reject("Error: User messages could not be fetched");
        resolve("Got Message from API 1");
      }, 90);
    });
  };
  
  const getUsers = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //reject("Error: User Data could not be fetched");
        resolve("Got User from API 2");
      }, 200);
    });
  };
  
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //reject("Error: Product Info could not be fetched");
        resolve("Got Product from API 3");
      }, 9);
    });
  };

  Promise.any([
    getMessage(),
    getUsers(),
    getProducts()
  ]).then((result)=>{
    console.log("the result is ", result);
  }).catch((error) =>{
    console.error("the error is",error);
  });

  