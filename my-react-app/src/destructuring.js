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