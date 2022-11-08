const mobileHeader = document.querySelector(".mobile_header");
const mobileHeaderContent = document.querySelector(".mobile_header_inner");
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header_inner");
const logo = document.querySelector(".logo");
const span1 = document.querySelector("#span1");
const span2 = document.querySelector("#span2");
const span3 = document.querySelector("#span3");
const header_phone = document.querySelector(".header_phone");
const icons = document.querySelectorAll(".header_icon");
const divs = document.querySelectorAll(".mobileBorderDiv");
const langChanger = document.querySelector(".langChanger");
const bluredHeader = document.querySelector(".header_blured");

let clicked = false;
if (window.innerWidth > 880) {
  const handleMobileMenu = () => {
    if (clicked) {
      mobileHeader.style.display = "none";
      header.style.backgroundColor = "unset";
      span1.classList.remove("rotate45deg");
      span2.style.display = "block";
      span3.classList.remove("rotate-45deg");
      divs.forEach((div) => {
        div.classList.remove("mobileBorder");
      });
      langChanger.style.display = "none";
      clicked = false;
    } else {
      mobileHeader.style.display = "block";
      header.style.backgroundColor = "#fff";
      logo.style.color = "#000";
      header.style.color = "#000";
      span1.classList.add("rotate45deg");
      span2.style.display = "none";
      span3.classList.add("rotate-45deg");
      divs.forEach((div) => {
        div.classList.add("mobileBorder");
      });
      langChanger.style.display = "block";
      clicked = true;
    }
  };

  hamburger.addEventListener("click", handleMobileMenu);
} else if (window.innerWidth < 880) {
  const handleMobileMenu = () => {
    if (clicked) {
      mobileHeader.style.display = "none";
      header.style.backgroundColor = "unset";
      span1.classList.remove("rotate45deg");
      span2.style.display = "block";
      span3.classList.remove("rotate-45deg");
      divs.forEach((div) => {
        div.classList.remove("mobileBorder");
      });
      clicked = false;
    } else {
      mobileHeader.style.display = "block";
      header.style.backgroundColor = "#000";
      span1.classList.add("rotate45deg");
      span2.style.display = "none";
      span3.classList.add("rotate-45deg");
      divs.forEach((div) => {
        div.classList.add("mobileBorder");
      });
      clicked = true;
    }
  };

  hamburger.addEventListener("click", handleMobileMenu);
}

var mainSwiper = new Swiper(".mainSwiper", {
  breakpoints: {
    1200: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
  },
  slidesPerView: 1.2,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1600,
});

var otherCarsSwiper = new Swiper(".otherCarsSwiper", {
  navigation: {
    prevEl: "#prevOC",
    nextEl: "#nextOC",
  },
  loop: true,
  speed: 1600,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    880: {
      slidesPerView: 2,
    },
  },
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const modal = document.querySelector(".modal");
const xBtn = document.querySelector(".modal_x_div");
const modalContent = document.querySelector(".modal_content");
const button = document.querySelector(".buy_btn");

button.addEventListener("click", () => {
  modal.style.display = "grid";
});

xBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  } else if (e.target == modalContent) {
    modal.style.display = "grid";
  }
});
