    let slideIndex = 1;
    showSlides();
    setInterval(function(){
        document.getElementById("nextSlider").click()
    }, 3000);
    function clickBtn(n) {
        slideIndex += n
        showSlides();
    }

    function showSlides() {
      let i;
      let slidesRun = document.getElementsByClassName("slide");
      for (i = 0; i < slidesRun.length; i++) {
        slidesRun[i].style.display = "none";
      }
      if (slideIndex > slidesRun.length) {slideIndex = 1}
      if (slideIndex <= 0) {slideIndex = 4}
      slidesRun[slideIndex-1].style.display = "block";
    }



