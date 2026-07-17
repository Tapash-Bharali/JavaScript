

function greet(){
  console.log("Hello friends");
}


function meet(callback){
  console.log("I am going to meet her");
  callback();
}

meet(greet);


function zomatoOrderPlaced(){
  console.log("We have started preparing your food");
}


function payment(amount,callback){
  console.log('${amount} payment has initialized')
  console.log("Payment is received");
  callback();
}

payment(500,zomatoOrderPlaced);