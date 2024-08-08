let time = 5000;
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("to_welcome").classList.add("hidden");
  }, time); // 10000 milliseconds = 10 seconds
});
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("welcome_video").classList.add("visible");
  }, time); // 10000 milliseconds = 10 seconds
});
