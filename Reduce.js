

const products = [
  {id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true},
  {id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true},
  {id: 3, name: "Smartphones", category: "Electronics", price: 800, inStock: false},
];

const totalPrice = products.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.price;
}, 0);

console.log(totalPrice);
