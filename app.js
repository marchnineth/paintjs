const canvas = document.getElementById("jsCanvas");

let painting = false; 

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainting();
}


if(canvas){
    // 캔버스 안에 한정하여 발생하는 이벤트
    canvas.addEventListener("mousemove",onMouseMove);
    // mousemove : mouse를 움직이고 있을 때의 상태
    canvas.addEventListener("mousedown",onMouseDown);
    // mousedown : mouse를 클릭하고 있을때의 상태
    canvas.addEventListener("mouseup",onMouseUp);
    // mouseup : mouse에서 클릭을 뗐을 때의 상태
    canvas.addEventListener("mouseleave",stopPainting);
    // mouseleave : mouse가 캔버스를 벗어났을 때
}