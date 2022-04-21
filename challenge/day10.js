// 12월 26일 경우에 어떻게 처리되는 지까지 확인하기
const clockTitle = document.querySelector(".js-clock");

function getTime() {
  const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
  const now = new Date();
  // This is in milisecondsx
  const difference = new Date(xmasDay - now);
  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  
  const days = Math.floor(hoursInMs / 24);
  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;
  
  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
  
  clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

getTime();
setInterval(getTime, 1000);
