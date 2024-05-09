document.addEventListener("DOMContentLoaded", function() {
  const bgRed = document.querySelector(".bg1 img");
  const bgBlue = document.querySelector(".bg2 img");

  const getStartedButton = document.getElementById("getStartedButton");
  const description = document.querySelector(".description");
  const homeButton = document.getElementById("homeButton");
  const about = document.querySelector(".about");
  const homeBut = document.querySelector(".homebut");
  const slide = document.querySelector(".slide");

  // Initially hide the second page elements
  bgBlue.style.display = "none";
  about.style.display = "none";
  homeBut.style.display = "none";

  // Initially show the red background image
  bgRed.style.opacity = 1;

  getStartedButton.addEventListener("click", function() {
    // Slide up elements on the first page
    bgRed.style.transition = "transform 2s ease-in-out";
    description.style.transition = "transform 2s ease-in-out";
    getStartedButton.style.transition = "transform 2s ease-in-out";
    slide.style.transition = "transform 2s ease-in-out";

    bgRed.style.transform = "translateY(-100vh)";
    description.style.transform = "translateY(-100vh)";
    getStartedButton.style.transform = "translateY(-100vh)";
    slide.style.transform = "translateY(-100vh)";

    setTimeout(function() {
      // Show the second page smoothly
      bgBlue.style.display = "block";
      about.style.display = "block";
      homeBut.style.display = "block";

      bgBlue.style.transition = "transform 2s ease-in-out";
      about.style.transition = "transform 2s ease-in-out";
      homeBut.style.transition = "transform 2s ease-in-out";

      bgBlue.style.transform = "translateY(0)";
      about.style.transform = "translateY(0)";
      homeBut.style.transform = "translateY(0)";
    }, 1); // Wait for the first page elements to slide up before showing the second page
  });

  homeButton.addEventListener("click", function() {
    // Slide down elements on the second page
    bgBlue.style.transition = "transform 2s ease-in-out";
    about.style.transition = "transform 2s ease-in-out";
    homeBut.style.transition = "transform 2s ease-in-out";

    bgBlue.style.transform = "translateY(100vh)";
    about.style.transform = "translateY(100vh)";
    homeBut.style.transform = "translateY(100vh)";

    setTimeout(function() {
      // Show the first page sliding down
      bgRed.style.transition = "transform 2s ease-in-out";
      description.style.transition = "transform 2s ease-in-out";
      getStartedButton.style.transition = "transform 2s ease-in-out";
      slide.style.transition = "transform 2s ease-in-out";

      bgRed.style.transform = "translateY(0)";
      description.style.transform = "translateY(0)";
      getStartedButton.style.transform = "translateY(0)";
      slide.style.transform = "translateY(0)";
    }, 2000); // Wait for the second page elements to slide down before showing the first page
  });
});
