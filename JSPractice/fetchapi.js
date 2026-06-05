async function fetchUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("user data not found...");
    }
    //parse json response
    const userData = await response.json(); //async step
    console.log(userData);
  } catch (error) {
    console.log("Error:", error);
  }
}
//call the function:
fetchUserData();
