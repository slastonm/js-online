function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b === 0){
        return 'На нуль ділити не можна';
    }
    else{
        return a/b;
    }
    
}
let firstNumber = 10;
let secondNumber = 3;
let operator = "*";
switch (operator) {
    case "+":
        console.log(add(firstNumber, secondNumber));
        break;
    case "-":
        console.log(substract(firstNumber, secondNumber));
        break;
    case "*":
        console.log(multiply(firstNumber, secondNumber));
        break;
    case "/":
        console.log(divide(firstNumber, secondNumber));
        break;
    default:
        console.log('Це не існуюча операція');
        break;
}

function calculator(operator, a, b){
    switch (operator) {
        case "+":
            console.log(add(a, b));
            break;
        case "-":
            console.log(substract(a, b));
            break;
        case "*":
            console.log(multiply(a, b));
            break;
        case "/":
            console.log(divide(a, b));
            break;
        default:
            console.log('Це не існуюча операція');
            break;
    }
}

calculator('+', 10, 15);
calculator('-', 10, 15);

// 2 Параметри та колбеки:
// Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.

function hiUser(value){
    console.log(`Вітаю ${value}`);
}
function wellcomUser(arr, callback){
    for(let i=0; i<arr.length; i++){
        // console.log(arr[i]);
        callback(arr[i]);
    }
}

wellcomUser(['Tom', 'Bob'], hiUser);

// let wellcomUser = (arrValue, callbackFn)=>{
//     ...
// }
