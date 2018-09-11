let startSession = document.querySelector('#startSession');
let sec = parseInt(document.querySelector('#seconds').innerText);
let min = parseInt(document.querySelector('#minutes').innerText);
let temp, counter = 0;

function start() {
    updateSeconds();
    startSession.removeEventListener('click', start);
}

function updateSeconds() {
    setInterval(function() {
        sec--;
        document.querySelector('#seconds').innerText = sec;
        if (sec == 0) {
            console.log('60sec');
            sec = 59;
            updateMinutes();
        }
    }, 1000);
}

function updateMinutes() {
    console.log('1min');
    min--;
    if (min < 0) {
        if (temp == 24) {
            console.log('25min');
            min = 24;
            temp = 4;
            alert("Time to work");
        } else if (temp == 4 || temp == undefined) {
            counter++;
            if (counter == 4) {
                alert("Well done");
                endSession();
            }
            console.log('5min');
            min = 4;
            temp = 24;
            alert("Time for 5 Minutes Break");
        }
    }
    document.querySelector('#minutes').innerText = min;
}

function endSession() {
    if (confirm("Do you want to resart the session?")) {
        startSession.addEventListener('click', start);
        counter = 0;
    } else {
        congratz();
    }
}

function congratz() {
    alert("You did it");
}

startSession.addEventListener('click', start);