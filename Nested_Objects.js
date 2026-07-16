const user = {
  name: "Tapash",
  age: 23,
  emailId: "tapash@gmail.com",
  amount:40000,
  address:{
    city:"Biswanath",
    state:"Assam"
  }
}


// const user2 = {...user};
// user2.name="Lola";
// user2.address.city="Dimapur";

// console.log(user2);


// deep copy
const user2 = structuredClone(user);
user2.address.city="Dimapur";

console.log(user);