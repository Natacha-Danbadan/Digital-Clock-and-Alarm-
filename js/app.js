const showClock = document.getElementById('clock');
const alarmTone = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-digital-clock-digital-alarm-buzzer-992.mp3');
alarmTone.loop = true
let alarmTime  = null
let alarmTimeout = null;


function updatetime(){
    const date = new Date(); 

    const hour = formatTime(date.getHours());
    const minute = formatTime(date.getMinutes());
    const second = formatTime(date.getSeconds());
     
    showClock.innerText= `${hour} : ${minute} : ${second}`;
}

function formatTime(time) {
    if (time < 10) {
        return '0'+ time;
    }
    return time;
}

function setAlarmTime(value){
    alarmTime = value;
}

function setAlarm(){
    if(alarmTime){
        const currentTime = new Date();
        const timeofAlarm = new Date(alarmTime);

        if(timeofAlarm > currentTime){
            const timeout = timeofAlarm.getTime() - currentTime.getTime();
            alarmTimeout = setTimeout(() => alarmTone.play(), timeout);
            alert('Alarm has been set successfully');
        }
    }

}

function resetAlarm() {
    alarmTone.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Your alarm has been cleared');
    }
}

setInterval(updatetime, 1000);

