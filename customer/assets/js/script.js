document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const closeHamburgerBtn = document.querySelector(".close-hamburger-btn");
  const sidebar = document.querySelector(".sidebar");
  const notifyBtn = document.querySelector(".notify-btn");
  const notifyWrapper = document.querySelector(
    ".dropdown-notifications-wrapper"
  );
  const profileViewBtn = document.querySelector(".profile-btn");
  const profileWrapper = document.querySelector(".profile-wrapper");

  hamburgerBtn.addEventListener("click", function () {
    sidebar.classList.add("active");
  });
  closeHamburgerBtn.addEventListener("click", function () {
    sidebar.classList.remove("active");
  });

  notifyBtn.addEventListener("click", function () {
    notifyWrapper.classList.toggle("show");
  });

  profileViewBtn.addEventListener("click", function () {
    profileWrapper.classList.toggle("show");
  });
});
