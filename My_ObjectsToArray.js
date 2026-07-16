const user = {
  name: "Tapash",
  age: 23,
  emailId: "tapash@gmail.com",
  amount:40000,
}

console.log(Object.entries(user));


for(let [keys,values]of Object.entries(user)){
  console.log(values);
}