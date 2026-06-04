function fetchUserData(userId, callback) {
  setTimeout(() => { //asznc task
    const users = {
      1: {
        id: 1,
        name: "Shilpa",
      },
      2: {
        id: 2,
        name: "Achyutha",
      },
      3: {
        id: 3,
        name: "Dwaraka",
      },
    };
    const user = users[userId]
    if(user)   callback(null, user); 
    else  callback("User not found", null);
  },5000);
}

function displayUser(error, user){
    if(error) console.error("Error :" , error);
    else  console.log("User: " , user);
}

//here after 2 seconds means once the async task is completed,
//then only call back function is called

fetchUserData(1, displayUser);
fetchUserData(100, displayUser);
