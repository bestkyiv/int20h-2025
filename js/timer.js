const countDownDate = new Date("February 02, 2025 23:59:59").getTime();

const formatTimeString = (hours, minutes, seconds) => {
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

const updateTimer = () => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days.toString().padStart(2, "0");
  document.querySelector(".hours").innerHTML = hours.toString().padStart(2, "0");
  document.querySelector(".minutes").innerHTML = minutes.toString().padStart(2, "0");
  document.querySelector(".seconds").innerHTML = seconds.toString().padStart(2, "00");
};

updateTimer();

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days.toString().padStart(2, "0");
  document.querySelector(".hours").innerHTML = hours.toString().padStart(2, "0");
  document.querySelector(".minutes").innerHTML = minutes.toString().padStart(2, "0");
  document.querySelector(".seconds").innerHTML = seconds.toString().padStart(2, "00");

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".days").innerHTML = "00";
    document.querySelector(".hours").innerHTML = "00";
    document.querySelector(".minutes").innerHTML = "00";
    document.querySelector(".seconds").innerHTML = "00";
  }
}, 1000);