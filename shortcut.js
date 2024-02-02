// 'almas', 5, true, {}, [] (all are truthy)
// '', 0, false, null, undefined (only those are falsy)

// check truthy
let myVar = 5;
if(myVar) {
    myVar = myVar * 100
} else {
    myVar = 0;
}

// you check negative or falsy anything
let myMoney = 50;
if(!myMoney) {

}

const money = 800;
let food;
if(money > 100) {
    food = 'biriyani';
} else {
    food = 'cha biscuit';
}

// ternary
 let food1 = money>100 ? 'biriyani' : 'cha biscuit';
 console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'water';
console.log(drink);

// number to string conversion
const num1 = 52;
const numString = num1 + '';
console.log(num1, numString);

// string to number conversion
const input = '302';
const inputNumber = +input;
console.log(input, inputNumber);

// 
const isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle bolean
isActive = !isActive;