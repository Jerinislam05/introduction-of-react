const person = {
    name : 'John',
    profession : 'surgeon',
    age: 39,
    address: 'shahbag'
}

// dot notation
const prof =person.profession;

// bracket notation(powerfull)
const prof1 = person['profession'] // one way
// or another way is
const pName = 'profession';
const prof2 = person[pName]
console.log(prof1);