const m1 = new Map([
  ["Tapash", 23],
  [2, "Tapash"],
  [true,11],
  [[10,30,11], "Vanshika"]
]);


m1.set({name: "Lola", age:20},false);
console.log(m1);

console.log(m1.get("Tapash"));
console.log(m1.delete("Vanshika"));
console.log(m1);
