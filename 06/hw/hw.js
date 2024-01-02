let multiplyValue = 4;

for(let i=0; i<10; i++){
    console.log(`Результат множення ${i}*${multiplyValue}=${i*multiplyValue}`);
}
for(let i = 10; i>0; i--){
    console.log(i);
}

let checkNumber = 5;
for(let i=0; i<checkNumber; i++){
    if(i%2 === 0){
        console.log(`Що ${i} парне значення`);
    }
    else{
        console.log(`Що ${i} не парне значення`);
    }  
}