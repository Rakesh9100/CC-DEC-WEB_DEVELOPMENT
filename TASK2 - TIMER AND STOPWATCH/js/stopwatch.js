let start = document.getElementById("startStopWatch")
let clear = document.getElementById("clearStopWatch")
let stopWatch = document.getElementById("stopWatch")
let count
let s = 0
let m = 0
let h = 0

let displayS = 0
let displayM = 0
let displayH = 0

status = "stopped"

function startClock(){

    s++

    // Logic to increment value
    if(s === 60){
        m ++;
        s = 0;

        if(m === 60){
            h ++;
            m = 0
        }
    }

    // logicc to add a 0 for display
    if (s < 10){
        displayS = "0" + s.toString()
    }else{
        displayS = s
    }

    if (m < 10){
        displayM = "0" + m.toString()
    }else{
        displayM = m
    }

    if (h < 10){
        displayH = "0" + h.toString()
    }else{
        displayH = h
    }


    stopWatch.innerHTML = displayH + ":" + displayM + ":" + displayS 
}

start.addEventListener('click', function(){

    if(status === "stopped"){
    count = setInterval(startClock, 1000)
    start.innerHTML = ("Stop")
    status = "started"

    }else{
        clearInterval(count)
        start.innerHTML = ("Start")
        status = "stopped"
    }
})

clear.addEventListener('click', function(){
    s = 0
    m = 0
    h = 0

    clearInterval(count)
    stopWatch.innerHTML = "00:00:00"
    start.innerHTML = ("Start")
    status = "stopped"
})