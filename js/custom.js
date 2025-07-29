const fname = $("#fname-field");
const lname = $("#fname-field");
const username = $("#username-field");
const email = $("#email-field");
const password = $("#password-field");
const cpassword = $("#cpassword-field");

const phone = $("#phone-field");
const gender = $("#gender-field");
const age = $("#age-field");
const bio = $("#bio-field");
const sign_submit = document.getElementById("signup_submit");
let current_slide = 1;

// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// nice select
$(document).ready(function () {
  $("select").niceSelect();
});

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  nav: true,
  navText: [],
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".next-fields").click((ev) => {
  let slide = ev.target.closest(".field-section");
  let nextSlide = slide.nextElementSibling;
  let alert = $("#signup-warning");

  if (current_slide == 1) {
    if (
      fname.val() == "" ||
      lname.val() == "" ||
      username.val() == "" ||
      email.val() == "" ||
      password.val() == "" ||
      cpassword.val() == ""
    ) {
      alert.text(
        "Please fill out all required information before proceeding..."
      );
      alert.fadeIn().addClass("show");
      setTimeout(() => {
        alert.fadeOut().removeClass("show");
      }, 1500);
    } else if (password.val() !== cpassword.val()) {
      alert.text("Password does not match confirm password...");
      alert.fadeIn().addClass("show");
      setTimeout(() => {
        alert.fadeOut().removeClass("show");
      }, 1500);
    } else {
      slide.classList.remove("d-block");
      slide.classList.add("d-none");
      nextSlide.classList.remove("d-none");
      nextSlide.classList.add("d-block");
      current_slide = 2;
      console.log("not");
    }
  } else if (current_slide == 2) {
    const country = $("#country-field");
    const address = $("#address-field");
    const education = $("#education-field");
    const skills = $("#skills-field");

    if (country.val() == "" || address.val() == "") {
      alert.text(
        "Please fill out all required information before proceeding..."
      );
      alert.fadeIn().addClass("show");
      setTimeout(() => {
        alert.fadeOut().removeClass("show");
      }, 1500);
    } else {
      slide.classList.remove("d-block");
      slide.classList.add("d-none");
      nextSlide.classList.remove("d-none");
      nextSlide.classList.add("d-block");
      sign_submit.removeAttribute("disabled");
      current_slide = 3;
    }
  }
});

$(".prev-fields").click((ev) => {
  let slide = ev.target.closest(".field-section");
  let prevSlide = slide.previousElementSibling;
  slide.classList.remove("d-block");
  slide.classList.add("d-none");
  prevSlide.classList.remove("d-none");
  prevSlide.classList.add("d-block");
  sign_submit.setAttribute("disabled", "disabled");
  current_slide -= 1;
});

$(".select-pic").click(() => {
  $("#profile-pic").click();
});

$("#profile-pic").change((ev) => {
  const file = ev.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      $(".select-pic").css("background-image", `url(${e.target.result})`);
    };
    reader.readAsDataURL(file);
  }
});
