document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".loader-wrapper").style.display = "none";
    document.querySelector(".content").style.display = "block";
  }, 2000); // 2 seconds
});
