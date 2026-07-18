// Scope & closure, HOF
// Global-> Accessible to everyone
// functional -> accessible only to that function'
// Block level scopr -> accesible only to that block

let a = 10;
const b = 20;


if(true){
  let d = 30;
  var e = 90;
}

console.log(e);



function greet(){

  let c = 30;
  var e = 90;
}

console.log(e);
greet();



let global = 30;

function greet() {
  let global = 40;
  console.log(global);
}

greet();

