let obj = [
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
];

let total=0;

for(let i in obj){
    total += (obj[i].price * obj[i].quantity);
}

console.log("Total Price",total);


// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number.
//A grocery object has a product, a quantity and a price, for example:
// 	([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ]) ➞ 10.4
