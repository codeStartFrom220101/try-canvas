const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const penSizeEl = document.querySelector('.range');
const sizeNum = document.querySelector('.range-container span');
const colorEl = document.querySelector('.color');
const ereaseEl = document.querySelector('.erease');
const clearEl = document.querySelector('.clear');


let size = 10;
let isDrawing = false;

let lastX = undefined;
let lastY = undefined;
color = 'black';

console.log(window.innerHeight, window.innerWidth);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
sizeNum.textContent = size;

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        drawCirle(lastX, lastY);
        ctx.beginPath();
        ctx.lineWidth = size*2;
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        lastX = e.offsetX;
        lastY = e.offsetY;
        drawCirle(lastX, lastY);
    }
})

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
})

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
})

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
})

function drawCirle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
}

penSizeEl.addEventListener('mouseup', function() {
    size = this.value
    sizeNum.textContent = size;
})

colorEl.addEventListener('change', ()=> {
    color = colorEl.value;
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
})

ereaseEl.addEventListener('click', () => {
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'white';
})

clearEl.addEventListener('click', () => {
    ctx.clearRect(0,0, canvas.width, canvas.height);
})