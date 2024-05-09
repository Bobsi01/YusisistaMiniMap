const getStartedButton = document.getElementById("getStartedButton");
const description = document.querySelector(".description");
const homeButton = document.getElementById("homeButton");
const about = document.querySelector(".about");
const homeBut = document.querySelector(".homebut");
const slide = document.querySelector(".slide");

getStartedButton.addEventListener("click", function() {
  description.classList.add("hide-description");
  getStartedButton.classList.add("hide-button");
  setTimeout(function() {
    about.classList.add("show-about");
    homeBut.classList.add("show-homebut");
    slide.classList.add("show-slide");
    description.style.display = "none";
    getStartedButton.style.display = "none";
  }, 2000);
});

homeButton.addEventListener("click", function() {
  about.classList.remove("show-about");
  homeBut.classList.add("hide-homebut");
  slide.classList.remove("show-slide");
  description.classList.remove("hide-description");
  getStartedButton.classList.remove("hide-button");
  setTimeout(function() {
    description.style.display = "block";
    getStartedButton.style.display = "block";
  }, 2000);
});

