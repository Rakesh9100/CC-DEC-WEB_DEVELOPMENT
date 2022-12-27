let start = document.getElementById("startTimer")
let clear = document.getElementById("clearTimer")
let audio = document.getElementById("beep")
audio.volume = 0.1
let interval
status = "stopped"

let second = 0
let minute = 0
let hour = 0

let displayS = 0 + "0"
let displayM = 0 + "0"
let displayH = 0 + "0"

start.addEventListener('click', function () {
    if(second === 0 && minute === 0 && hour === 0){
        alert ("Set a Time")
        status = "started"
    }

    let ss = document.getElementById("s")
    let mm = document.getElementById("m")
    let hh = document.getElementById("h")
    ss.value = ""
    mm.value = ""
    hh.value = ""
    
    if (status === "stopped") {
        status = "started"
        interval = setInterval(startTimer, 1000)
        start.innerHTML = "Stop"
    }else{
        clearInterval(interval)
        start.innerHTML = "Start"
        status = "stopped"
    }
})

function startTimer() {
    second--

    if(second === 0 && minute === 0 && hour === 0){
        setTimeout(()=>{
            audio.play()
            clearInterval(interval)
            start.innerHTML = "Start"
            status = "stopped"
            alert("Timer is over")
            displayS = 0 + "0"
        }, 500)
    }

    // seconds
    if (second === -1) {
        second = 59
        minute--
    }

    if (minute === -1) {
        minute = 59
        hour--
    }

    if (hour < 0) {
        hour = 0
    }

    // Hours
    if (hour == "") {
        hour = 0
    }

    if (hour < 10) {
        displayH = "0" + hour
    } else {
        displayH = hour
    }

    // Minutes
    if (minute == "") {
        minute = 0
    }

    if (minute < 10) {
        displayM = "0" + minute
    } else {
        displayM = minute
    }

    if (second == "") {
        second = 0
    }

    if (second < 10) {
        displayS = "0" + second
    } else {
        displayS = second
    }

    timer.innerHTML = displayH + ":" + displayM + ":" + displayS
}

function changeHour() {
    let h = document.getElementById("h")
    let timer = document.getElementById("timer")

    hour = h.value

    if (hour == "") {
        hour = 0
    }

    if (hour < 10) {
        displayH = "0" + hour
    } else {
        displayH = hour
    }

    timer.innerHTML = displayH + ":" + displayM + ":" + displayS
}

function changeMinute() {
    let m = document.getElementById("m")
    let timer = document.getElementById("timer")

    minute = m.value

    if (minute == "") {
        minute = 0
    }

    if (minute < 10) {
        displayM = "0" + minute
    } else {
        displayM = minute
    }

    timer.innerHTML = displayH + ":" + displayM + ":" + displayS
}

function changeSecond() {
    let s = document.getElementById("s")
    let timer = document.getElementById("timer")

    second = s.value

    if (second == "") {
        second = 0
    }

    if (second < 10) {
        displayS = "0" + second
    } else {
        displayS = second
    }

    timer.innerHTML = displayH + ":" + displayM + ":" + displayS
}
