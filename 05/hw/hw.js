let firstValue = Number(prompt('Напишіть число'));
let secondValue = Number(prompt('Напишіть число'));
let thirdValue = Number(prompt('Напишіть число'));

if(firstValue>=secondValue && firstValue>=thirdValue){
    console.log(`FirstValue найбільше число`);
}
else if(secondValue>=firstValue && secondValue>=thirdValue){
    console.log(`SecondValue найбільше число`);
}
else{
    console.log(`ThirdValue найбільше число`);
}

let typeMonthNumber = Number(prompt('Напишіть число ві 1 до 12'));

if(typeMonthNumber >=1 && typeMonthNumber<=12){
    if(typeMonthNumber>=3 & typeMonthNumber<=5){
        console.log('Весна');
    }
    else if(typeMonthNumber>=6 & typeMonthNumber<=8){
        console.log('Літо');
    }
    else if(typeMonthNumber>=9 & typeMonthNumber<=11){
        console.log('Осінь');
    }
    else{
        console.log('Зима');

    }
}
else{
    console.log('Ви вказали некоректне значення');
}

let angelValue = 45;

let angelType = (angelValue>0 && angelValue<90)? 'Гострий кут':'Тупий кут';
