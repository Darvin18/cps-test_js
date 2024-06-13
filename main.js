
const secondsblock = document.querySelector('.js-seconds');
const milisecondblock = document.querySelector('.js-miliseconds');
const btnStart = document.querySelector(".start_button");
const btnReset = document.querySelector(".reset_button");

let interval;
let seconds = 0;
let miliseconds = 0;

const startTimer = () =>{
    miliseconds++;
    if (miliseconds <= 99){
        milisecondblock.innerHTML = miliseconds;
    }
    if (miliseconds == 100){
        milisecondblock.innerHTML = '00';
    }
    if(miliseconds > 99){
        seconds++;
        secondsblock.innerHTML = '0'+seconds;
        miliseconds=0;
    }
    if(seconds == 10){
        clearInterval(interval);
        seconds = 0;
        miliseconds = 0;
        secondsblock.innerHTML = '00';
        milisecondblock.innerHTML = '00';
        var cps = counter / 10;
        alert('Твой кпс: '+cps);
        counter = 0;
    }
};

btnStart.addEventListener("click", () =>{
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})
btnReset.addEventListener('click', () =>{
    clearInterval(interval);
    seconds = 0;
    miliseconds = 0;
    secondsblock.innerHTML = '00';
    milisecondblock.innerHTML = '00';
    btnStart.innerHTML = 'Нажми, чтобы начать';
    counter = 0;
})

var counter = 0;
function click_counter(btnStart){
    counter++;
    btnStart.innerHTML = 'Вы нажали: '+counter+' раз';
}
