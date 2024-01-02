// let firstNumber = prompt('Type first value'); // number-> string
// let secondValue = prompt('Type second value'); // number-> string
let firstNumber = Number(prompt('Type first value')); // number-> string
let secondValue = Number(prompt('Type second value')); // number-> string

// '2'+'3' 23 a+a = aa
// console.log(`+ operation = ${+firstNumber+ +secondValue}`);
// console.log(`+ operation = ${parseInt(firstNumber)+parseInt(secondValue)}`);
// console.log(`+ operation = ${parseFloat(firstNumber)+parseFloat(secondValue)}`);
console.log(`+ operation = ${Number(firstNumber)+Number(secondValue)}`);


// parent -> 2.3 -> 2

console.log(`- operation = ${firstNumber-secondValue}`);
console.log(`* operation = ${firstNumber*secondValue}`);
console.log(`/ operation = ${firstNumber/secondValue}`);

