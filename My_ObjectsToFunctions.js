const user = {
  name: "Tapash",
  age: 23,
  emailId: "tapash@gmail.com",
  amount:40000,
  greeting: function() {
    console.log('I am coming on 16 July ${this.name}');
    return 23;
  }
}


const user2 = {
  name: "Lola",
  account: 201,
  greeting: function(){
    console.log('I am coming on 16 July ${this.name}');
    return 23;
  }
}


user2.greeting = user.greeting;

console.log(user2)
const va = user.greeting();
console.log(va);