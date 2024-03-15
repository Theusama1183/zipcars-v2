document.addEventListener("DOMContentLoaded", function () {
  // Sidebar functionality
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const closeHamburgerBtn = document.querySelector(".close-hamburger-btn");
  const sidebar = document.querySelector(".sidebar");

  hamburgerBtn.addEventListener("click", function () {
    sidebar.classList.add("active");
  });

  closeHamburgerBtn.addEventListener("click", function () {
    sidebar.classList.remove("active");
  });

  // Notification functionality
  const notifyBtn = document.querySelector(".notify-btn");
  const notifyWrapper = document.querySelector(
    ".dropdown-notifications-wrapper"
  );

  notifyBtn.addEventListener("click", function () {
    notifyWrapper.classList.toggle("show");
  });

  // Profile functionality
  const profileViewBtn = document.querySelector(".profile-btn");
  const profileWrapper = document.querySelector(".profile-wrapper");

  profileViewBtn.addEventListener("click", function () {
    profileWrapper.classList.toggle("show");
  });

  // Confirm Popup
  function showConfirmPopup() {
    const bookNowPopup = document.getElementById("bookNowPopup");
    const overlay = document.getElementById("overlay");
    bookNowPopup.style.display = "block";
    overlay.style.display = "block";
  }

  document
    .querySelector("#Confirm")
    .addEventListener("click", function (event) {
      event.preventDefault();
      showConfirmPopup();
    });

  // Change form step to payment fieldset
  function changeFormStep() {
    const detailsFieldset = document.querySelector(".details-fieldset");
    const paymentFieldset = document.querySelector(".payment-fieldset");
    const bookNowPopup = document.querySelector("#bookNowPopup");
    const overlay = document.querySelector("#overlay");
    bookNowPopup.style.display = "none";
    overlay.style.display = "none";
    detailsFieldset.style.display = "none";
    paymentFieldset.style.display = "block";
  }

  document
    .querySelector(".confirm-btn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      changeFormStep();
    });

  // Show form submit loading and booked vehicle and driver
  function formSubmit() {
    const formSubmitLoading = document.querySelector(".form-submit-loading");
    const formSubmitPopup = document.querySelector("#formSubmitPopup");
    const overlay = document.querySelector("#overlay");
    formSubmitLoading.style.display = "flex";

    setTimeout(function () {
      formSubmitLoading.style.display = "none";
      formSubmitPopup.style.display = "block";
      overlay.style.display = "block";
    }, 5000);
  }

  document
    .querySelector("#form_submit")
    .addEventListener("click", function (event) {
      event.preventDefault();
      formSubmit();
    });

  // Check for bookings in the table
  const bookingTable = document.getElementById("bookingTable");
  const noBookingsMessage = document.getElementById("noBookingsMessage");

  function checkForBookings() {
    const tbody = bookingTable.querySelector("tbody");
    const hasBookings = tbody && tbody.children.length > 0;

    if (hasBookings) {
      noBookingsMessage.style.display = "none";
    } else {
      noBookingsMessage.style.display = "block";
    }
  }

  window.addEventListener("DOMContentLoaded", checkForBookings);

  let addReviewBtns = document.querySelector(".add-review");
  let addReviewPopup = document.querySelector("#addReviewPopup");
  let overlay = document.querySelector("#overlay");

  addReviewBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      addReviewPopup.style.display = "block";
      overlay.style.display = "block";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let addPaymentBtn = document.querySelector("#addPaymentBtn");
  let paymentMethodPopup = document.querySelector("#paymentMethodPopup");
  let paymentOverlay = document.querySelector("#overlay");

  addPaymentBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default action of the link
    paymentMethodPopup.style.display = "block";
    paymentOverlay.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var invoiceBtns = document.querySelectorAll(".invoice-btn");

  invoiceBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.getElementById("invoicePopup").style.display = "block";
      document.getElementById("overlay").style.display = "block";
    });
  });

  document.addEventListener("click", function (e) {
    if (
      !document.getElementById("invoicePopup").contains(e.target) &&
      !e.target.classList.contains("invoice-btn")
    ) {
      document.getElementById("invoicePopup").style.display = "none";
      document.getElementById("overlay").style.display = "none";
    }
  });
});

var loadFile = function (event) {
  var image = document.getElementById("profileOutput");
  var imagePath = event.target.files[0].name;
  image.src = URL.createObjectURL(event.target.files[0]);
  document.querySelector(".profile-pic-path").textContent = imagePath;
};
