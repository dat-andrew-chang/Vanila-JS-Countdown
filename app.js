
const countdown = function(){
    const countDate = new Date(2022, 0, 1, 00, 00, 00).getTime();
    const currentDate = new Date().getTime();
    const gap = countDate - currentDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayCount = Math.floor(gap / day);
    const hourCount = Math.floor((gap % day) / hour);
    const minuteCount = Math.floor((gap % hour) / minute);
    const secondCount = Math.floor((gap % minute / second));

    document.querySelector('.day').textContent = dayCount;
    document.querySelector('.hour').textContent = hourCount;
    document.querySelector('.minute').textContent = minuteCount;
    document.querySelector('.second').textContent = secondCount;
}

setInterval(countdown, 1000);