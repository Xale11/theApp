let key1 = document.querySelector(".key1");
let key2 = document.querySelector(".key2");
let key3 = document.querySelector(".key3");
let key4 = document.querySelector(".key4");
let key5 = document.querySelector(".key5");
let key6 = document.querySelector(".key6");
let key7 = document.querySelector(".key7");
let key8 = document.querySelector(".key8");
let key9 = document.querySelector(".key9");
let key0 = document.querySelector(".key0");
let keyMinus = document.querySelector(".key-");
let keyStart = document.querySelector(".start-btn");
let keyReset = document.querySelector(".reset-btn");
let keyStop = document.querySelector(".stop-btn");
let keyClock = document.querySelector(".keyClock");
let dropLink = document.querySelectorAll(".drop-link");
let dd0 = document.querySelector(".drop-link0");
let btn1 = document.querySelector(".btn1");

let board = document.querySelector(".board");
let clock = ["0","0","0","0","0","0"];
let clockBreak = ":";
let displayed = ``;
let secondOnes = parseInt(clock[5]);
let secondTens = parseInt(clock[4]);
let minuteOnes = parseInt(clock[3]);
let minuteTens = parseInt(clock[2]);
let hourOnes = parseInt(clock[1]);
let hourTens = parseInt(clock[0]);
let timeStr;
let time = secondOnes + (secondTens * 10) + (minuteOnes * 60) + (minuteTens * 600) + (hourOnes * 3600) + (hourTens * 36000);
let countSO = time % 60;
let countST = Math.floor(time / 60)
let timeNow = Date.now();
let timeTo = timeNow + (time * 1000);
let timeLeft = timeTo - timeNow;
let timeSet;
let timer;
let enable = true;


function displayVal(val){
    if (enable == true){
        clock.shift();
        clock.push(val);
        secondOnes = parseInt(clock[5]);
        secondTens = parseInt(clock[4]);
        minuteOnes = parseInt(clock[3]);
        minuteTens = parseInt(clock[2]);
        hourOnes = parseInt(clock[1]);
        hourTens = parseInt(clock[0]);
        time = secondOnes + (secondTens * 10) + (minuteOnes * 60) + (minuteTens * 600) + (hourOnes * 3600) + (hourTens * 36000);
        let displayed = `${clock[0]}${clock[1]}${clockBreak}${clock[2]}${clock[3]}${clockBreak}${clock[4]}${clock[5]}`;
        board.innerHTML = displayed;
        console.log(time);
        timeSet = time;
    }
}

function displayZero(){
    clock = ["0","0","0","0","0","0"];
    let displayed = `${clock[0]}${clock[1]}${clockBreak}${clock[2]}${clock[3]}${clockBreak}${clock[4]}${clock[5]}`;
    board.innerHTML = displayed;
    time = 0;
    timeSet = 0;
    stopSwitch();
    enable = true;
}

function startTimer(){
    startSwitch();
    timerr = setInterval(countDown,1000);
    
}

function countDown(){
    
    
    time = time + 1;
    if (time >= 0){
        clock[5] = (time % 60) % 10;
        clock[4] = Math.floor((time % 60) / 10);
        clock[3] = Math.floor(time / 60) % 10;
        clock[2] = Math.floor(((time % 3600) / 60) / 10);
        clock[1] = Math.floor(time / 3600) % 10;
        clock[0] = Math.floor((time / 3600) / 10);
        let displayed = `${clock[0]}${clock[1]}${clockBreak}${clock[2]}${clock[3]}${clockBreak}${clock[4]}${clock[5]}`;
        board.innerHTML = displayed;
        console.log(time);
    }
    else{clearInterval(timerr)}
}

function reset(){
    clearInterval(timerr);
    time = 0;
    clock[5] = (time % 60) % 10;
    clock[4] = Math.floor((time % 60) / 10);
    clock[3] = Math.floor(time / 60) % 10;
    clock[2] = Math.floor(((time % 3600) / 60) / 10);
    clock[1] = Math.floor(time / 3600) % 10;
    clock[0] = Math.floor((time / 3600) / 10);
    let displayed = `${clock[0]}${clock[1]}${clockBreak}${clock[2]}${clock[3]}${clockBreak}${clock[4]}${clock[5]}`;
    board.innerHTML = displayed;
    stopSwitch();
}

function startSwitch(){
    
        keyStart.style.display = "none";
        keyStop.style.display = "inline-block";
    
}

function stopSwitch(){
    keyStart.style.display = "inline-block";
    keyStop.style.display = "none"; 
}

function stopCount(){
    clearInterval(timerr);
    clock[5] = (time % 60) % 10;
    clock[4] = Math.floor((time % 60) / 10);
    clock[3] = Math.floor(time / 60) % 10;
    clock[2] = Math.floor(((time % 3600) / 60) / 10);
    clock[1] = Math.floor(time / 3600) % 10;
    clock[0] = Math.floor((time / 3600) / 10);
    let displayed = `${clock[0]}${clock[1]}${clockBreak}${clock[2]}${clock[3]}${clockBreak}${clock[4]}${clock[5]}`;
    board.innerHTML = displayed;
    stopSwitch();
    console.log(time);
}

function linkDrop(item){
    item.classList.toggle("active");
}

function setTimer(time1){
    time = time1;
    timeSet = time;
    clock[5] = (time % 60) % 10;
    clock[4] = Math.floor((time % 60) / 10);
    clock[3] = Math.floor(time / 60) % 10;
    clock[2] = Math.floor(((time % 3600) / 60) / 10);
    clock[1] = Math.floor(time / 3600) % 10;
    clock[0] = Math.floor((time / 3600) / 10);
    let displayed = `${clock[0]}${clock[1]}${clockBreak}${clock[2]}${clock[3]}${clockBreak}${clock[4]}${clock[5]}`;
    board.innerHTML = displayed;
}

key1.addEventListener("click", function(){displayVal(1)}, false);
key2.addEventListener("click", function(){displayVal(2)}, false);
key3.addEventListener("click", function(){displayVal(3)}, false);
key4.addEventListener("click", function(){displayVal(4)}, false);
key5.addEventListener("click", function(){displayVal(5)}, false);
key6.addEventListener("click", function(){displayVal(6)}, false);
key7.addEventListener("click", function(){displayVal(7)}, false);
key8.addEventListener("click", function(){displayVal(8)}, false);
key9.addEventListener("click", function(){displayVal(9)}, false);
key0.addEventListener("click", function(){displayVal(0)}, false);
keyMinus.addEventListener("click", function(){displayZero()}, false);
keyStart.addEventListener("click", function(){startTimer()}, false);
keyReset.addEventListener("click", function(){reset()}, false);
keyStop.addEventListener("click", function(){stopCount()}, false);
keyClock.addEventListener("click", function(){linkDrop(dd1)}, false);
btn1.addEventListener("click", function(){linkDrop(dd0)}, false);
keyBell.addEventListener("click", function(){linkDrop(dd2)}, false);
sec15.addEventListener("click", function(){setTimer(15)}, false);
sec30.addEventListener("click", function(){setTimer(30)}, false);
min1.addEventListener("click", function(){setTimer(60)}, false);
min2.addEventListener("click", function(){setTimer(120)}, false);
min5.addEventListener("click", function(){setTimer(300)}, false);

