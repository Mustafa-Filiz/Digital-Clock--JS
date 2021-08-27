function showTimeDate() {
    const displayTime = document.getElementById("displayTime");
    const displayDate = document.getElementById("displayDate");
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    
    const time = new Date();
    
    displayTime.innerHTML = time.toLocaleTimeString();
    displayDate.innerHTML = time.toLocaleDateString("en-GB", options);
}

setInterval(() => {
    showTimeDate();
}, 1000);


let minute = 0;
let second = 0;
let splitSecond = 0;
let isStopped = true;
const displayTimer = document.getElementById("displayTimer");

function startTimer() {
    if (isStopped) {
        isStopped = false;
        timer();
    }
}

function stopTimer() {
    if (!isStopped) {
        isStopped = true;
    }
}

function timer() {
    if (!isStopped) {
        splitSecond = parseInt(splitSecond);
        second = parseInt(second);
        minute = parseInt(minute);

        splitSecond++;
        if (splitSecond == 60) {
            second++;
            splitSecond = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }

        if (splitSecond == 0 || splitSecond < 10) {
            splitSecond = "0" + splitSecond;
        }
        if (second == 0 || second < 10) {
            second = "0" + second;
        }
        if (minute == 0 || minute < 10) {
            minute = "0" + minute;
        }

        displayTimer.innerHTML = `${minute} : ${second} : ${splitSecond}`;

        setTimeout("timer()", 16.666666666667)
    }
}

function resetTimer() {
    displayTimer.innerHTML = "00 : 00 : 00";
    splitSecond = 0;
    second = 0;
    minute = 0;
    isStopped = true;
}