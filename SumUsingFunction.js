

// rest operator
function addNumber(...num) {
  let sum = 0;

  for(let n of num){
    sum+=n;
  }

  console.log(sum);
  
}

addNumber(6,7);
addNumber(10,27);
addNumber(100,237,678);
addNumber(113,279,887,909);