const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const area = document.querySelector(".time-list");


const targetDate = new Date('Jan 1 2024,00:00:00');
const oneSecondInMs = 1000;
const oneMinuteInMs = oneSecondInMs * 60;
const oneHourInMs = oneMinuteInMs * 60;
const oneDayInMs = oneHourInMs * 24;

setInterval(() => {
    
    const currentDate = Date.now();
    const targetDateInMs = targetDate.getTime();
    const timeToTarget = targetDateInMs - currentDate;

     const daysRemaining = Math.floor(timeToTarget / oneDayInMs);
     const hoursRemaining = Math.floor(
       (timeToTarget % oneDayInMs) / oneHourInMs
     );
     const minutesRemaining = Math.floor(
       (timeToTarget % oneHourInMs) / oneMinuteInMs
     );
     const secondsLeft = Math.floor(
       (timeToTarget % oneMinuteInMs) / oneSecondInMs
    );
    days.innerText = `${daysRemaining} days`;
    hours.innerText = `${hoursRemaining} hours`;
    minutes.innerText = `${minutesRemaining} min`;
    seconds.innerText = `${secondsLeft} sec`;

}, 1000);
