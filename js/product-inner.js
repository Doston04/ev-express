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
    600: {
      slidesPerView: 1.2,
    },
    1200: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
  },
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1600,
  navigation: {
    prevEl: "#prevMS",
    nextEl: "#nextMS",
  },
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

const imgModal = document.querySelector(".imgModal");
const content = document.querySelector(".imgContent");
const imagePolya = document.querySelector("#imgContent_image");
const gallery = document.querySelectorAll(".gallery_photo");

gallery.forEach((photo) => {
  photo.addEventListener("click", (e) => {
    imgModal.style.display = "grid";
    const element = e.target.getAttribute("title");
    const text = document.querySelector("#modal_text");
    text.innerHTML = "";
    if (element == "mainPhoto") {
      imagePolya.setAttribute("src", "./media/g-main.png");
    } else if (element == "photo1") {
      imagePolya.setAttribute("src", "./media/g-grid1.png");
    } else if (element == "photo2") {
      imagePolya.setAttribute("src", "./media/g-grid2.png");
    } else if (element == "photo3") {
      imagePolya.setAttribute("src", "./media/g-grid3.png");
    } else if (element == "photo4") {
      imagePolya.setAttribute("src", "./media/g-grid4.png");
    }
  });
});

const swiperImages = document.querySelectorAll(".mainSwiper_slide");
swiperImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgModal.style.display = "grid";
    const text = document.querySelector("#modal_text");
    text.innerHTML = "";
    const element = e.target.getAttribute("title");
    if (element == "swiperImage1") {
      imagePolya.setAttribute("src", "./media/ms-1.png");
      text.innerHTML = "33 дюйм диагональный светодиодный дисплей";
      content.append(text);
    } else if (element == "swiperImage2") {
      imagePolya.setAttribute("src", "./media/ms-2.png");
      text.innerHTML = "Черный хрустальный щит и светодиодные фар.";
      content.append(text);
    } else if (element == "swiperImage3") {
      imagePolya.setAttribute("src", "./media/ms-1.png");
      text.innerHTML = "Светодиодные лампы";
      content.append(text);
    } else if (element == "swiperImage4") {
      imagePolya.setAttribute("src", "./media/ms-2.png");
      text.innerHTML = "Просторный интерьер";
      content.append(text);
    }
  });
});

const img_x_btn = document.querySelector(".img_x_btn");

img_x_btn.addEventListener("click", () => {
  imgModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == imgModal) {
    imgModal.style.display = "none";
  } else if (e.target == imagePolya) {
    imgModal.style.display = "grid";
  }
});
