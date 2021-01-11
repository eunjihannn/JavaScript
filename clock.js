const clockBody = document.querySelector(".js-clock");

const clock = clockBody.querySelector("h1");

function playClock(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : miuntes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

function init(){
    playClock();
    setInterval(playClock,1000);
}
init();