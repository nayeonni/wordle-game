const 시작_시간 = new Date();

function SetTime() {
  const 현재_시간 = new Date();
  const 흐른_시간 = new Date(현재_시간 - 시작_시간);
  const 분 = 흐른_시간.getMinutes().toString().padStart(2, "0");
  const 초 = 흐른_시간.getSeconds().toString().padStart(2, "0");
  const time = document.getElementById("timer");

  time.innerText = `time : ${분}:${초}`;
}

setInterval(SetTime, 1000);
