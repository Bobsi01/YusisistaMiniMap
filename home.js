document.addEventListener("DOMContentLoaded", function() {
  const bgRed = document.querySelector(".bg1");
  const bgBlue = document.querySelector(".bg2");

  const getStartedButton = document.getElementById("getStartedButton");
  const description = document.querySelector(".description");
  const homeButton = document.getElementById("homeButton");
  const about = document.querySelector(".about");
  const homeBut = document.querySelector(".homebut");
  const slide = document.querySelector(".slide");
  const slidehover = document.querySelector(".slide:hover");
  const secondPage = document.querySelector(".second-page");
  const yusisi = document.querySelector(".yusisi");

  // Initially hide the second page elements
  bgBlue.style.opacity = 0;
  secondPage.style.display = "none";
  secondPage.style.opacity = 0;
  about.style.transition = "transform 2s ease-in-out, opacity 2s ease-in-out";
 
  about.style.transform = "translateY(100vh)"; // Start below the viewport
  

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
    yusisi.style.transition = "transform 2s ease-in-out";

    bgRed.style.transform = "translateY(-100vh)";
    description.style.transform = "translateY(-100vh)";
    getStartedButton.style.transform = "translateY(-100vh)";
    slide.style.transform = "translateY(-100vh)";
    yusisi.style.transform = "translateY(-100vh)";

    setTimeout(function() {
      // Show the second page smoothly
      
      secondPage.style.display = "flex";
      
      setTimeout(function() {
        secondPage.style.opacity = 1;
        secondPage.style.transition = "opacity 2s ease-in-out";
        
        bgBlue.style.opacity = 1;
        about.style.opacity = 1;
        about.style.transform = "translateY(0)";
        homeBut.style.transition = "opacity 2s ease-in-out";
        homeBut.style.opacity = 1;
        secondPage.style.visibility = "visible";
        setTimeout(enableScrolling, 2000); // Enable scrolling after the animation completes
      }, 100); // Slight delay to ensure display change takes effect before starting animations
    }, 750); // Wait for the first page to slide up
  });

  homeButton.addEventListener("click", function() {
    // Disable scrolling
    disableScrolling();

    // Fade out the background of the second page
    bgBlue.style.opacity = 0;

    // Slide down elements on the second page
    about.style.transform = "translateY(100vh)";
    about.style.opacity = 0;
    homeBut.style.transition = "opacity 2s ease-in-out";
    homeBut.style.opacity = 0;

    var slides = document.querySelectorAll('.slide');
    slides.forEach(function(slide) {
        slide.classList.toggle('scaleOnHover');
    });

    setTimeout(function() {
      // Slide down elements on the first page
      
      bgRed.style.transition = "transform 2s ease-in-out";
      description.style.transition = "transform 2s ease-in-out";
      getStartedButton.style.transition = "transform 2s ease-in-out";
      slide.style.transition = "transform 2s ease-in-out";
      yusisi.style.transition = "transform 2s ease-in-out";

      bgRed.style.transform = "translateY(0)";
      description.style.transform = "translateY(0)";
      getStartedButton.style.transform = "translateY(0)";
      slide.style.transform = "translateY(0)";
      yusisi.style.transform = "translateY(0)";
      secondPage.style.transition = "opacity 2s ease-in-out"; // Add this line
      secondPage.style.opacity = 0; 


      setTimeout(function() {
        secondPage.style.visibility = "hidden";
       d
        enableScrolling(); // Enable scrolling after the second page hides
      }, 1500); // Wait for the second page elements to slide down before hiding the second page
    }, 500); // Wait for the background to fade out
  });
});
