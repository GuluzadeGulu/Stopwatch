// * Buttons *
const btnStart = document.querySelector('.btn-start')
const btnStop = document.querySelector('.btn-stop')
const btnClear = document.querySelector('.btn-clear')

// * Number *
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

// * Variables *
let hours = 0,
minutes = 0,
seconds = 0,
interval;

// * Listener *
btnStart.addEventListener('click', () => {
    interval = setInterval(stopwatch, 1000)
})

btnStop.addEventListener('click', () => {
    btnStart.removeAttribute('disabled')
    clearInterval(interval)
})

btnClear.addEventListener('click', () => {
    hours = 0
    minutes = 0
    seconds = 0
    second.innerHTML = '00'
    minute.innerHTML = '00'
    hour.innerHTML = '00'
    btnClear.setAttribute('disabled', '')
    clearInterval(interval)
    btnStart.removeAttribute('disabled')

})

// * Function*
function stopwatch (){
    // * Seconds *
    seconds++
    btnClear.removeAttribute('disabled')
    btnStop.removeAttribute('disabled')
    btnStart.setAttribute('disabled', '')
    if (seconds <= 9) second.innerHTML = '0' + seconds;
    if(seconds > 9) second.innerHTML = seconds;
    if (seconds > 59){
        seconds = 0
        second.innerHTML = '0' + 0
        minutes++
    }

    // * Minutes *
    if (minutes <= 9) minute.innerHTML = '0' + minutes
    if (minutes > 9) minute.innerHTML = minutes
    if (minutes > 59){
        minutes = 0
        minute.minutes = '0' + 0
        hours++
    }

    // * Hours *
    if (hours <= 9) hour.innerHTML = '0' + hours
    if (hours > 9) hour.innerHTML = hours

}