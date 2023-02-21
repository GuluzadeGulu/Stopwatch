const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

// const start = document.querySelector('.start');
// const stop = document.querySelector('.stop').addEventListener('click', () => {
//     hour.innerHTML -= hour.innerHTML;
//     minute.innerHTML -= minute.innerHTML;
//     second.innerHTML -= second.innerHTML;
// });


let secondCounter = 0, 
minuteCounter = 0, 
hourCounter = 0;

const time = setInterval(() => {
    if (secondCounter <= 9){
        second.innerHTML = '0' + secondCounter;
    }

    if (secondCounter > 9 && secondCounter < 60){
        second.innerHTML = secondCounter;
    }

    if (secondCounter >= 60){
        secondCounter = secondCounter - secondCounter;
        second.innerHTML = '0' + secondCounter;
        minuteCounter++;
        minute.innerHTML = '0' + minuteCounter
    }

    if (minuteCounter <= 9){
        minute.innerHTML = '0' + minuteCounter;
    }

    if (minuteCounter > 9 && minuteCounter <= 60){
        minute.innerHTML = minuteCounter;
    }

    if (minuteCounter >= 60){
        hourCounter++;
        hour.innerHTML = '0' + hourCounter;
        minuteCounter = minuteCounter - minuteCounter; 
    }

    if (hourCounter > 9 && hourCounter <= 24){
        hour.innerHTML = hourCounter;
    }

    if (hourCounter > 23){
        hour.innerHTML = '0' + (hourCounter - hourCounter);
    }
    secondCounter++;

}, 1000)