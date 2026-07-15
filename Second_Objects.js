const user = {
  name: "Tapash",
  age: 23,
  emailId: "tapash@gmail.com",
  amount:40000,
  "home address" : "Biswanath"
}


for (let keys in user){
  console.log(keys,user[keys]);
}