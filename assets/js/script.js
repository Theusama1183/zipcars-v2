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
