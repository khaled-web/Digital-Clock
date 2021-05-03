const convertFormate = (time) => {
 let formate = 'AM';
 if (time >= 12) {
  formate = 'PM';
 }
 return formate;
}

const checkTime = (time) => {
 if (time > 12) {
  time = time - 12;
 } else if (time === 0) {
  time = 12;
 }
 return time;
}

const addZero = (time) => {
 if (time < 10) {
  time = '0' + time;
 }
 return time;
}



const showTime = () => {
 let clock = document.getElementById('clock');
 let date = new Date();
 let hours = date.getHours(); //0...23-hour
 let minutes = date.getMinutes(); // 0...59-min
 let seconds = date.getSeconds(); //0...59-second

 let formateHours = convertFormate(hours);

 hours = checkTime(hours);
 hours = addZero(hours);

 minutes = addZero(minutes);

 seconds = addZero(seconds);

 clock.innerHTML = `${hours} : ${minutes} : ${seconds} ${formateHours}`;

}

setInterval(showTime, 1000);