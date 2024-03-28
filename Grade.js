let write = document.getElementById("write")
let out = document.getElementById("out")
let resultTone = new Audio('Winner.mp3',)
let ring = new Audio('ASAP.mp3')
let ringtone = new Audio('D looser.mp3')
let ringing = new Audio('filtered-928FBE93-D046-4E4D-8F54-E1DD196E299E.mp3')
let ringin = new Audio('Looser.mp3')

function checkGrade() {
    if (write.value=="") {
       alert("input your score") 
    }
    else if (write.value >= 70) {
        alert("A")
        resultTone.play()
        out.innerHTML = "A"
    }
    else if (write.value >= 60) {
        alert("B")
        ring.play()
        out.innerHTML = "B"
    }
    else if (write.value >= 50) {
        alert("C")
        ringtone.play()
        out.innerHTML = "C"
    }
    else if (write.value >= 40) {
        alert("D")
        ringing.play()
        out.innerHTML = "D"
    }else{
        alert("F")
        ringin.play()
        out.innerHTML = "F"
    }
}
// setInterval(() => {
//     resultTone.pause()
//     ring.pause()
//     ringtone.pause()
//     ringing.pause()
//     ringin.pause()
// }, 19000);