//Closure for Private Variables 
//Bank Account Example

function createBankAccount(){
let balance = 5000
return {
  deposit: function(amount){
    // console.log(this);
    if(typeof amount ==="number" && amount>0){
    balance+=amount;
    return balance;
  }
},
withdraw: function(amount){
  if(typeof amount==="number" && amount>0 && balance>=amount){
    balance=amount;
    return balance;
  }
},
getBalance: function(){
  return balance;
}
}
 return user;
}


const customer = createBankAccount();
console.log((customer.getBalance()));
console.log(customer.withdraw(1000));




