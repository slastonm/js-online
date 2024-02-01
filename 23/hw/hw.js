function compareNumbers(a,b){
    return new Promise((resolve, reject)=>{
        if(a === b){
            reject('Числа рівні між собою');
        }
        else{
            let message = a>b? `${a} більше ${b}`:`${b} більше ${a}`;
            resolve(message);
        }
    });
}

compareNumbers(5, 10)
.then(message =>console.log(message))
.catch(error=>console.log(error));

compareNumbers(15, 10)
.then(message =>console.log(message))
.catch(error=>console.log(error));

compareNumbers(10, 10)
.then(message =>console.log(message))
.catch(error=>console.log(error));