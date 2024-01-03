window.onload = function(){
    let customMenuEl = document.querySelector('.customMenu');
    document.querySelector('.textBlock').addEventListener('contextmenu', function(e){
        e.preventDefault();
        customMenuEl.style.top = `${e.clientY}px`;
        customMenuEl.style.left = `${e.clientX}px`;
        customMenuEl.style.display = 'block';
    });
    document.addEventListener('click', function(){
        customMenuEl.style.display = 'none';
    });

    let imgEl = document.querySelector('img');
    imgEl.addEventListener('mouseover', function(){
        this.style.transform = 'scale(1.2)';
        this.style.transition = 'transform 0.7s ease';
        this.style.boxShadow = '0 0 10px rgba(0,0,0, 0.5)';
    });
    imgEl.addEventListener('mouseout', function(){
        this.style.transform = 'none';
        this.style.boxShadow = 'none';
    });

    let gameArea = document.querySelector('.gameArea');
    let gameObj = document.querySelector('.gameObject');
    let posX = 0;
    let posY = 0;

    document.addEventListener('keydown', function(e){
        switch (e.key){
            case 'ArrowUp':
                posY = Math.max(0, posY -10);
                break;
            case 'ArrowDown':
                posY = Math.min(gameArea.clientHeight - gameObj.clientHeight, posY+10);
                break;
            case 'ArrowLeft':
                posX = Math.max(0, posX -10);
                break;
            case 'ArrowRight':
                posX = Math.min(gameArea.clientWidth - gameObj.clientWidth, posX+10);
                break;
        }
        gameObj.style.top = `${posY}px`;
        gameObj.style.left = `${posX}px`;
    })
}