const dueDate = "5 Jan 2023";

function countdown() {
  const currentDate = new Date();
  const due = new Date(dueDate);
  // Date.prototype.getTime() 函数可以获取Date对象所表示的毫秒值，两者相减即可获得相差的毫秒数。 将毫秒除以1000 即可得到相差的秒数
  const timeLeft = (due - currentDate) / 1000;
  const days = Math.floor(timeLeft / (60 * 60 * 24));
  const hours = Math.floor((timeLeft / (60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 60) % 60);
  const seconds = Math.floor(timeLeft % 60);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("mins").innerHTML = formatTime(minutes);
  document.getElementById("seconds").innerHTML = formatTime(seconds);
}

const formatTime = (time) => {
  if (time < 10) {
    return "0" + time;
  }
  return time;
};
// initial call
countdown();
setInterval(countdown, 1000);
