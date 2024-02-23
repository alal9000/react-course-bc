// JS destructuring

// example 1: use destructuring to swap the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// example 2: swap two elements in an array

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// example 3: assign array elements to variables

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

const [...newArray] = colors;

console.log(newArray);

// example 4: extract values from objects

const person1 = {
  firstName: "Spongebob",
  lastName: "SquarePants",
  age: 30,
  job: "Fry Cook"
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34
};

// const { firstName, lastName, age, job = "Unemployed" } = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// example 5: destructure in function parameters

function displayPerson({firstName, lastName, age, job="Unemployed"}){
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);

}

displayPerson(person2)
