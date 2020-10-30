const clock = document.getElementById("jsClock");
const thisYear = document.getElementById("jsYear");

const getTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    clock.innerText = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;

    thisYear.innerText = `${year}`
}

const clockInit = () => {
    setInterval(getTime, 1000);
}

if(clock) {
    clockInit();
}