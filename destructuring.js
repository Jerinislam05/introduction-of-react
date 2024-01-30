// array destructuring
const numbers = [42, 65]
// const x = numbers[0];
// const y = numbers[1];

// cost [x, y] = [42, 65]

const [x, y] = numbers;

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
//  etar mane holo dan pashe ja e thakuk jodi kono array hoy tahole bam pashe array er moto baniye seta rekhe destructuring korte hoy
// const [first, second] = [90, 34];
const [first, second] = boxify(90, 34);
console.log(boxify(90, 34));


// another example
const student = {
    name: 'salib khan',
    age: 32,
    movies: ['king', 'mukti']
}

const [firstMovie, secondMovie] = ['king', 'mukti']; //eta evabe o kora jay destructuring abr nicher rule e o kora jay

const [firstMovie2, secondMovie2] = student.movies;

console.log(firstMovie, secondMovie, firstMovie2, secondMovie2);


// object destructuring
// dan pashe jodi object thake bam pashe o object er moto baniye destructuring korte hoy

const {name, age} = {name: 'alu', age: 36}
const {name2, age2} = {id: 12, name2: 'alu', salary: 3400, age2: 36}
console.log(name2, age2);

// another example
const employee = {
    ide: 'VS code',
    machine: 'mac',
    designation: 'developer',
    languages: ['html', 'css', 'js'],
    specifications: {
        height: 66,
        weight: 70,
        drink: 'water',
        address: 'London'
    }
}
const {ide, languages} = employee;
const {address, weight} = employee.specifications;
console.log(ide, languages, address, weight);