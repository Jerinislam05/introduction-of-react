const products = [
    {name: 'laptop', price: 60000, brand: 'dell', color: 'blue'},
    {name: 'phone', price: 160000, brand: 'iphone', color: 'black'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'silver'},
    {name: 'sunglass', price: 300, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'pink'},
];

// map()
// kono ekta array or object theke amra jodi properties gulo niye r ekta array banaite chai tahole .map() use korte hoy.
// brand gulo chai tai evabe
const brands = products.map(product => product.brand);
console.log(brands);
// price gulo chai tai evabe
const prices = products.map(product => product.price);
console.log(prices);


// forEach()
// same as map but forEach kichu return korena.
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product => {
    // multiLine er jonne
})

// filter()
// shorto jara fulfill korbe tader k sudhu dibe
const cheap = products.filter(product =>product.price <= 5000);
console.log(cheap);


// find
// jara jara match korbe tader prothom ta dibe
const special = products.find(product => product.name.includes('n'));
console.log(special);