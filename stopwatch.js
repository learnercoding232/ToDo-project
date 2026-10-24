
const timerDisplay = document.querySelector(".timer");
const stopbtn = document.querySelector("#stopbtn");
const startbtn = document.querySelector("#startbtn");
const resetbtn = document.querySelector("#resetbtn");

let msec = 0;
let secs = 0;
let mins = 0;
let timerId = null;

startbtn.addEventListener("click", () => {
    if (timerId !== null) return;

    timerId = setInterval(startTimer, 10);
});

stopbtn.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
});

resetbtn.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;

    msec = 0;
    secs = 0;
    mins = 0;

    timerDisplay.innerHTML = "00 : 00 : 00";
});

function startTimer() {
    msec++;

    if (msec >= 100) {
        msec = 0;
        secs++;

        if (secs >= 60) {
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML =
        `${minsString} : ${secsString} : ${msecString}`;
}
