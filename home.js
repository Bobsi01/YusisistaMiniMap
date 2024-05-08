const button = document.getElementById("getStartedButton");
const desc = document.querySelector(".description");

button.addEventListener("click", function() {
  desc.classList.add("hide-description"); // Add class to hide description
  button.classList.add("hide-button"); // Add class to hide button
  setTimeout(function() {
    document.querySelector(".about").classList.add("show-about"); // Add class to show 'about' section after transition ends
    desc.style.display = "none";
    button.style.display = "none";
  }, 2000); // Adjust this time to match the duration of the transition in CSS
});