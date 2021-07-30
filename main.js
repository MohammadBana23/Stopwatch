
let [mill, sec, min, hour] = [0, 0, 0, 0];
let time ;

document.getElementById("start").addEventListener('click' , () => {
    time = setInterval(startStopwatch , 10);
});

function startStopwatch() {
    let stopwatch = document.getElementsByClassName("stopwatch")[0];
    mill += 1;
    if (mill == 100) {
        mill = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min = 0;
                hour++;
            }
        }
    }

    let h = hour < 10 ? "0" + hour : hour; 
    let m = min < 10 ? "0" + min : min; 
    let s = sec < 10 ? "0" + sec : sec; 
    let ms = mill < 10 ? "0" + mill : mill;

    stopwatch.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

document.getElementById("stop").addEventListener("click" , () => {
    clearInterval(time);
});