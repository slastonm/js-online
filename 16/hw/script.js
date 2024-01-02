window.onload = function(){
    let btnCounter = document.querySelector('#clickButton');
    let counterContainer = document.querySelector('#counter');
    let count = 0;
    function icreaseCounter(){
        count++;
        counterContainer.innerText = count;
        if(count>10){
            btnCounter.removeEventListener('click', icreaseCounter);
        }
    }
    btnCounter.addEventListener('click', icreaseCounter);

    let btnContainer = document.querySelector('.blockContainer');
    btnContainer.addEventListener('click', function(event){
        let buttonClassName = event.target.className;
        alert(`Клік зроблений по кнопці ${buttonClassName}`);
    });

    let menuBtn = document.querySelector('.menu-btn');
    let menuList = document.querySelector('.menu-list');

    menuBtn.onclick = function(){
        this.classList.toggle('active');
        menuList.classList.toggle('active');
        
    }
}