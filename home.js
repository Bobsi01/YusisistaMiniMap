document.addEventListener("DOMContentLoaded", function() {
  const bgRed = document.querySelector(".bg1");
  const bgBlue = document.querySelector(".bg2");

  const getStartedButton = document.getElementById("getStartedButton");
  const description = document.querySelector(".description");
  const homeButton = document.getElementById("homeButton");
  const about = document.querySelector(".about");
  const homeBut = document.querySelector(".homebut");
  const slide = document.querySelector(".slide");
  const secondPage = document.querySelector(".second-page");

  // Initially hide the second page elements
  bgBlue.style.opacity = 0;
  secondPage.style.display = "none";
  about.style.transition = "transform 2s ease-in-out, opacity 2s ease-in-out";
  homeBut.style.transition = "transform 2s ease-in-out, opacity 2s ease-in-out";

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
      secondPage.style.display = "block";
      bgBlue.style.opacity = 1;
      about.style.opacity = 1;
      homeBut.style.opacity = 1;
      about.style.transform = "translateY(0)"; // Slide up to the center
      homeBut.style.transform = "translateY(0)"; // Slide up to the center
    
    }, 1000); // Adjust the timing accordingly

    // Slide up animation for the second page elements
    about.style.transform = "translateY(100%)";
    homeBut.style.transform = "translateY(100%)";
    about.style.opacity = 0;
    homeBut.style.opacity = 0;
    setTimeout(function() {
      about.style.transition = "transform 2s ease-in-out, opacity 2s ease-in-out";
      homeBut.style.transition = "transform 2s ease-in-out, opacity 2s ease-in-out";
      about.style.transform = "translateY(0)";
      homeBut.style.transform = "translateY(0)";
      about.style.opacity = 1;
      homeBut.style.opacity = 1;
    }, 1200); // Adjust the timing accordingly
  });

  homeButton.addEventListener("click", function() {
    // Slide down elements on the second page
    about.style.transform = "translateY(200vh)";
    homeBut.style.transform = "translateY(200vh)";
    about.style.opacity = 0;
    homeBut.style.opacity = 0;

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

      // Hide the second page after sliding down
      secondPage.style.display = "none";
      bgBlue.style.opacity = 0;
    }, 900); // Wait for the second page elements to slide down before showing the first page
  });
});