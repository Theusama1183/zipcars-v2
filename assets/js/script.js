var video = document.getElementById("myVideo");
var toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    video.setAttribute("controls", "controls");
    toggleButton.innerHTML = "";
  } else {
    video.pause();
    video.removeAttribute("controls");
    video.currentTime = 0;
    toggleButton.innerHTML = "";
  }
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  navText: [
    "<img src='assets/Images/left-arrow-ico.png'>",
    "<img src='assets/Images/right-arrow-ico.png'>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});

function changeImage(imageUrl) {
  var mainImage = $(".main-image");
  mainImage.attr("src", imageUrl);

  // Re-initialize elevatezoom
  mainImage.elevateZoom({
    zoomType: "inner",
    cursor: "crosshair",
  });
}

$(document).ready(function () {
  $("#mainImageSlider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
  });

  // Initialize elevatezoom
  $(".main-image").elevateZoom({
    zoomType: "inner",
    cursor: "crosshair",
  });
});

function toggleZoom() {
  var zoomImage = $(".zoomContainer");
  if (zoomImage.is(":visible")) {
    zoomImage.hide();
  } else {
    zoomImage.show();
  }
}
