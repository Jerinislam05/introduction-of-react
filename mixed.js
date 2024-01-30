// 1. JSON e convert korte JSON.stringify

const student = {
  name: "salib khan",
  age: 32,
  movies: ["king", "mastan"],
};
const studentJson = JSON.stringify(student);
console.log(student);
console.log(studentJson);

// JSON ke normal javascript e convert korte JSON.parse
const studentObj = JSON.parse(studentJson);
console.log(studentObj);

// 2. fetch
/* fetch('url')
.then(res => res.json())
.then(data => console.log(data)); */

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys, values);

// for
// array er moddhe loop chalaite forEach use korbo ekhon theke jodi return na paite chai
const numbers = [74, 32, 89, 23, 56];
numbers.forEach((num) => console.log(num));

// map
// jodi return paite chai tahole
const multiply = numbers.map((num) => num * 2);
console.log(multiply);

// for of array like object er upor use korbo
// for in use korbo ekta object properties gulo ke loop korte

// add or remove from array
const products = [
  { name: "laptop", price: 60000, brand: "dell", color: "blue" },
  { name: "phone", price: 160000, brand: "iphone", color: "black" },
  { name: "watch", price: 3000, brand: "casio", color: "silver" },
  { name: "sunglass", price: 300, brand: "ribon", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "pink" },
];

const newProd = {name: 'wbcam', price: 40000, color: 'black'};

// copy products array and then add newProd
const newProducts = [...products, newProd];
console.log(newProducts);

// create a new array without one specific item
// ami phone item ke sorabo 
const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);