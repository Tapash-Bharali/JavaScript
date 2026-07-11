const str = 'Hello friends';
console.log(str.length);
console.log(str[4]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.toWellFormed());
console.log(str.indexOf('fri'));
console.log(str.endsWith('s'));
console.log(str.startsWith('l'));
console.log(str.slice(0,4));
console.log(str.slice(-5,-2));
console.log(str.substring(2,5));


const str2 = "Tapash";
const str3 = "Bharali";
console.log(str2+str3);



const user = "  Tapash   Bharali  ";
console.log(user.trim());


const names = "Tapash,Lola,Akash,Jyotirman";
console.log(names.split(","));