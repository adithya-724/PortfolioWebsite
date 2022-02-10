// mobile-device navigation

$("#icon-container").click(function () {
  $("#icon").toggleClass("rotate");
  $("nav").toggleClass("display");
  $(".wrapper").toggleClass("bg");
});

$("button").click(function () {
  $(".one").toggleClass("animations");
  $(".two").toggleClass("animations");
  $(".three").toggleClass("animations");
  $(".four").toggleClass("animations");
});
$(document).ready(function () {
  timing();
});
function timing() {
  setTimeout(function () {
    $(".group").fadeIn("slow");
  }, 900);
  setTimeout(function () {
    $(".btn").fadeIn("slow");
  }, 850);
  setTimeout(function () {
    $("#icon-container").fadeIn("slow", "linear", function () {
      $("#icon").animate(
        {
          width: "40px",
          fontSize: "30px",
        },
        "slow"
      );
    });
  }, 900);
}
// scroll effect on header

const body = document.body;
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains("scroll-down")
  ) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});
//smooth-scroll

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//accordion

$(document).ready(function () {
  $(".card-header").click(function () {
    // self clicking close
    if ($(this).next(".card-body").hasClass("active")) {
      $(this).next(".card-body").removeClass("active").slideUp();
      $(this).children("span").removeClass("fa-minus").addClass("fa-plus");
    } else {
      $(".card .card-body").removeClass("active").slideUp();
      $(".card .card-header span").removeClass("fa-minus").addClass("fa-plus");
      $(this).next(".card-body").addClass("active").slideDown();
      $(this).children("span").removeClass("fa-plus").addClass("fa-minus");
    }
  });
});

// darkMode

$(".dark").click(function nightMode() {
  $("body").toggleClass("shift");
});
