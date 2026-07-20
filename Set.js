
const arr = [10,20,20, 10,25,15,10,20]
console.log(arr);

const s1 =  new Set(arr);
s1.add(11);
console.log(s1);
console.log(s1.has(20));
console.log(s1.size);
console.log(s1.entries(3));
console.log(s1.delete(10));
console.log(s1);







