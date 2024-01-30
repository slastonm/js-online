window.onload = function(){
    function displayMessage(message, delay){
        setTimeout(()=>{
            console.log(message);
        }, delay);
    }
    displayMessage('Hello user', 5000);

    let btnEl = document.querySelector('button');
    btnEl.addEventListener('click', function(){
        let counter = 0;
        let intervalFunction = setInterval(()=>{
            console.log(++counter);
            if(counter>=10){
                clearInterval(intervalFunction);
                console.log('Taймер зупинено');
            }
        }, 1000);
    })
}