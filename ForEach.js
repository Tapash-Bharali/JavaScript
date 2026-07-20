// The forEach() method can accept up to three arguments inside its callback function

const arr = [10,20,30,5,90,87];

let sum = 0;

arr.forEach((Number,index,arr)=>{
  // console.log(Number,index,arr);
  sum+=Number;
})


console.log(sum);
