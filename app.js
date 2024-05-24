var hour = 0
var min = 0
var sec = 0

function start() {
   timer = setInterval(() => {
      sec++
     if(sec >= 60){
        min++
        sec = 0
      }
      else if(min >= 60){
        hour++
        min = 0
      }
     document.getElementById('numbers').innerHTML = `${hour} : ${min} : ${sec}`
  }, 1000);
}

function pause() {
  clearInterval(timer)
}

function reset() {
    hour = 0
    min = 0
    sec = 0
    document.getElementById('numbers').innerHTML = `${hour} : ${min} : ${sec}`
    pause()
}

function o(){
   alert("please don't dobble click ❗ \nnow refresh 🔄 \nand then click")
}