
const user = {
  name: "Tapash",
  age: 23,
  emailId: "tapash@gmail.com",
  amount:40000,
  "home address" : "Biswanath"
}

console.log(user);
console.log(typeof user);
console.log(user["home address"]);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));



user.amount = 50000;
console.log(user);

delete user.emailId;
console.log(user);


