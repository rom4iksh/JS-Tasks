//1)
let myObject = {
  name: "John Doe"
};
let jsonString = JSON.stringify(myObject);
let parsedObject = JSON.parse(jsonString);


//2)
let user = {
  username: "jsmith",
};
localStorage.setItem("user", JSON.stringify(user));
let storedUser = localStorage.getItem("user");
let newUser = JSON.parse(storedUser);
