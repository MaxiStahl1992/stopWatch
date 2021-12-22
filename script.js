const stopwatch = document.getElementById('stopwatch');

const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button')

let hr = 0;
let min = 0;
let sec = 0;
let timeRunning = false;

function startStopwatch(){
    if (timeRunning === false){
        timeRunning = true;
        stopwatchCycle();
    }
}

function stopStopwatch(){
    if(timeRunning === true){
        timeRunning = false;
    }
}

function stopwatchCycle(){
    if(timeRunning === true){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if(sec === 60){
            min = min+1;
            sec = 0;
        }
        if(min === 60){
            hr = hr+1;
            min = 0;
            sec = 0;
        }

        if(sec < 10 || sec ===0) {
            sec = '0' + sec;
        }
        if(min < 10 || min === 0){
            min = '0' + min;
        }
        if (hr < 10 || hr === 0){
            hr = '0' + hr;
        }

        stopwatch.innerHTML = hr + ":" + min +":" + sec;

        setTimeout("stopwatchCycle()", 1000);
    }
}

function resetStopwatch(){
    stopwatch.innerHTML = '00:00:00'
    timeRunning = false;
    sec = 0;
    min = 0;
    hr = 0;
}

startButton.addEventListener('click',() => startStopwatch());
stopButton.addEventListener('click', () => stopStopwatch());
resetButton.addEventListener('click', () => resetStopwatch())