
const arr1 = [10,15,27,13,89,92];
const arr2 = arr1.slice(2,4);     //slicing
console.log(arr1);
console.log(arr1.splice(1,3));
const arr3 = arr1.splice(1,3,"Tapash",20);      //splice
console.log(arr1);
console.log(arr3);

const arr4 = [5,7,17,32,27];
const arr5 = ["Tapash",23,true];
const arr6= arr4.concat(arr4,arr5);       // concat is used to add two arrays
console.log(arr6);

const arr7 = [...arr1,...arr2,...arr4,...arr5];         //spread operator
console.log(arr3);


const names = ["Tapash", "Akash","Lola","Jyotirman","Ankita","Vanshika"];
console.log(names.toString());
console.log(names.indexOf("Lola"));
console.log(names.includes("Tapash"));
names.sort();
console.log(names);
names.sort();
names.reverse();
console.log(names);




const a = [10,40,31,71,5,11];
a.sort((a,b)=> a-b);
console.log(a);
a.reverse();
console.log(a);


const c = [-17,5,10,-2,-9];
c.sort((c,d) => c-d);
console.log(c);
c.reverse();
console.log(c);
// console.log(c.find[4]);


const e = [2.7,1.99,13.33,7.999,27.9054];
e.sort((e,f)=>e-f);
console.log(e);
e.reverse();
console.log(e);
console.log(e.includes(7.999));
console.log(e.length);


const my_arr = [10,20,30,[40,90,11,],80];
const myy_arr = my_arr.flat(2);
console.log(my_arr);
