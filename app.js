const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false; 
let filling = false;

function stopPainting(){
    painting = false;
    // 그림그리기가 멈출때의 조건이 반복되는 경우가 많아 아예 따로 함수를 정의
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(){
 if(filling === true){
     filling = false;
     mode.innerText = "Fill";
 } else {
    filling = true;
    mode.innerText = "Paint";
 }
}

if(canvas){
    // 캔버스 안에 한정하여 발생하는 이벤트
    canvas.addEventListener("mousemove",onMouseMove);
    // mousemove : mouse를 움직이고 있을 때의 상태
    canvas.addEventListener("mousedown",startPainting);
    // mousedown : mouse를 클릭하고 있을때의 상태
    canvas.addEventListener("mouseup",stopPainting);
    // mouseup : mouse에서 클릭을 뗐을 때의 상태
    canvas.addEventListener("mouseleave",stopPainting);
    // mouseleave : mouse가 캔버스를 벗어났을 때
}

Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick));

if(range){
    range.addEventListener("input",handleRangeChange)
}

if(mode){
    mode.addEventListener("click",handleModeClick);
}