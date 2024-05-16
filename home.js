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
  about.style.transform = "translateY(100vh)"; // Start below the viewport
  homeBut.style.transform = "translateY(100vh)"; // Start below the viewport

  function disableScrolling() {
    document.body.classList.add('no-scroll');
  }

  function enableScrolling() {
    document.body.classList.remove('no-scroll');
  }

  getStartedButton.addEventListener("click", function() {
    // Disable scrolling
    disableScrolling();

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
      secondPage.style.display = "flex";
      setTimeout(function() {
        bgBlue.style.opacity = 1;
        about.style.opacity = 1;
        homeBut.style.opacity = 1;
        about.style.transform = "translateY(0)";
        homeBut.style.transform = "translateY(0)";
        setTimeout(enableScrolling, 2000); // Enable scrolling after the animation completes
      }, 100); // Slight delay to ensure display change takes effect before starting animations
    }, 1000); // Wait for the first page to slide up
  });

  homeButton.addEventListener("click", function() {
    // Disable scrolling
    disableScrolling();

    // Slide down elements on the second page
    about.style.transform = "translateY(100vh)";
    homeBut.style.transform = "translateY(100vh)";
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

      setTimeout(function() {
        secondPage.style.display = "none";
        bgBlue.style.opacity = 0;
        enableScrolling(); // Enable scrolling after the second page hides
      }, 1500); // Wait for the second page elements to slide down before hiding the second page
    }, 1000); // Adjust the timing accordingly
  });
});
