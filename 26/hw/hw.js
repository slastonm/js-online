window.onload = function(){
    function drawLine(x1,y1,x2,y2){
        const canvas = document.querySelector('#myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
    }
    drawLine(10,10,0, 200);
    drawLine(10,10,350, 200);
    
    function drawSvgLine(x1, y1, x2, y2, color, width){
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100vh');

        const line = document.createElementNS(svgNS, 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', color);
        line.setAttribute('stroke-width', width);

        svg.appendChild(line);
        document.body.appendChild(svg);
    }
    drawSvgLine(10, 10, 250, 250, 'red', 10);

}