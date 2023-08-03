export function timeFormat (time) {  //标准格式化时间
    let timee = parseInt(time/1000);
    //分钟
    var minute = timee / 60;
    var minutes = parseInt(minute);
  
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    //秒
    var second = timee % 60;
    var seconds = Math.round(second);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return `${minutes}:${seconds}`;
  }
  export function songTimeFormat (time) { //格式化音乐时间
   //分钟
   var minute = time / 60;
   var minutes = parseInt(minute);
  
   if (minutes < 10) {
     minutes = "0" + minutes;
   }
  
   //秒
   var second = time % 60;
   var seconds = Math.round(second);
   if (seconds < 10) {
     seconds = "0" + seconds;
   }
   return `${minutes}:${seconds}`;
  }