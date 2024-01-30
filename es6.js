const numbers = [89, 35, 98, 12];
const student = {
  name: "salib khan",
  age: 32,
  movies: ["king", "mukti", "mastan"],
};

// 1. template string
const about = `My name is ${student.name} age of ${student.age} has a number ${numbers[2]} aslo has movie ${student.movies[0]}`
console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixty = num => num + 60;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const multyLine = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// 3. spread operator
const newNumbers = [...numbers];
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];

numbers.push(89, 99)

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);