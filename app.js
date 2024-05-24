var hour = 0
var min = 0
var sec = 0

function start() {
   timer = setInterval(() => {
      sec++
      if(sec<10){
        sec = '0'+sec
      }
     else if(sec >= 60){
        min++
        sec = 0
        if(min<10){
          min = '0'+min
        }
      }
     else if(min >= 60){
        hour++
        min = 0
        if(hour<10){
          hour = '0'+hour
        }
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

function ops(){
   alert("please don't dobble click ❗ \nnow refresh 🔄 \nand then click")
}