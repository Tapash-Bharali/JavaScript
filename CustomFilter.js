// Custom Filter implementation

const arr = [10,20,30,5,90,87];


// this =  [10,20,30,5,90,87];



arr.filtering = function(compare){
  const result = [];
  for(let num of this){
    if(compare(num)){
      result.push(num);
    }

  }

  return result;
}

const newArr = arr.filtering((num)=>num>25);

console.log(newArr);
