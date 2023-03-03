const clock = document.querySelector(".info .clock");

function time(){
    const now = new Date();
    const nowHours = String(now.getHours());
    const nowgetMinutes = String(now.getMinutes());
    const nowDateSeconds = String(now.getSeconds());

    const padHours = nowHours.padStart(2, "0");
    const padMinutes = nowgetMinutes.padStart(2, "0");
    const padSeconds = nowDateSeconds.padStart(2, "0");
    
    clock.innerText = `${padHours} : ${padMinutes} : ${padSeconds}`
}

time();
setInterval(time, 1000);
