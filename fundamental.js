// 1. How to declare a variable using let and const
const fatherName = 'Shafiqul';
let season = 'rainy';
season = 'winter';

// 2. conditions
// six basic condition: >, <, ===, !==, <=, >=
// multiple condition: &&, ||

if(fatherName === 'Shafiqul' || season === 'rainy') {

} else if(fatherName === 'Shafiqul'){

} else {

}

//3. array declare
// index
// length, push
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// for loop
for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// 5. function 
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 78);

// 6. object
// three ways to access property by name
const student = {
    name: 'salib khan',
    age: 32,
    movies: ['king', 'mukti', 'mastan']
}

const myVariable = 'age'

console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]);