const user = {
  name: "Tapash",
  age: 23,
  emailId: "tapash@gmail.com",
  amount:40000,
}

//for of loop of array
for(let keys of Object.keys(user)){
  console.log(keys);
}