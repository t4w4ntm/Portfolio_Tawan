window.onload = pageLoad;

function pageLoad(){
    document.getElementById("start").onclick = startGame;
}


function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
    var TIMER_TICK = 1000;
    var min = 0.5; // 0.5 minute (30 seconds)
    var second = min * 60; 
    var timer = setInterval(timeCount, TIMER_TICK);
    
    function timeCount(){
        var allbox = document.querySelectorAll("#layer div");
        var x = document.getElementById('clock');
        x.innerHTML = second;
        
        if(second > 0 && allbox.length == 0){
            alert("You win!");
            clearInterval(timer);
            clearScreen();
        } else if(second == 0 && allbox.length > 0){
            alert("Game over");
            clearInterval(timer);
            clearScreen();
        } else {
            second--;
        }
    }
}


function addBox(){
    // สร้างกล่องตาม input ที่เราใส่ 
    var numbox = document.getElementById("numbox").value;
    var colorDrop = document.getElementById("color").value;
    var gameLayer = document.getElementById("layer");

    for (var i = 0; i < numbox; i++){
        var tempbox = document.createElement("div");
        tempbox.className = "square " + colorDrop;  // ใช้คลาสจาก color ที่เลือก
        tempbox.id = "box" + i;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
        // add element to HTML node
        gameLayer.appendChild(tempbox);
        bindBox(tempbox); // bind box with click event
    }
}


function bindBox(box){
    // เมื่อกดแล้ว กล่องจะหายไป
    box.onclick = function(){
        box.parentNode.removeChild(box);  // ลบกล่องออกจาก layer
    }
}


function clearScreen(){
    var allbox = document.querySelectorAll("#layer div");

    // ลบทุก div
    for (var i = 0; i < allbox.length; i++){
        allbox[i].parentNode.removeChild(allbox[i]);
    }
}




