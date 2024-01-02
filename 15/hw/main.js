window.onload = function(){
    function getRandomColor(){
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        return `rgb(${r},${g},${b})`;
    }
    function createDivs(){
        const containerEl = document.createElement('div');
        containerEl.classList.add('container');
        containerEl.style.display = 'flex';
        containerEl.style.flexWrap = 'wrap';
        containerEl.style.width = '900px';
        containerEl.style.margin = '0 auto';
        for(let i = 0; i<50; i++){
            const divEl = document.createElement('div');
            divEl.style.width = '50px';
            divEl.style.height = '50px';
            divEl.style.borderRadius = '100%';
            divEl.style.backgroundColor = getRandomColor();
            containerEl.appendChild(divEl);
        }
        document.body.appendChild(containerEl);
    }
    createDivs();
    let [...divs] = document.querySelectorAll('.container div');
    divs.forEach(div=>{
        div.classList.add('circle-elemt');
    })
}