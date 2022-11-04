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

let clicked = false;
const handleMobileMenu = () => {
  if (clicked) {
    mobileHeader.style.display = "none";
    header.style.backgroundColor = "unset";
    logo.style.color = "#fff";
    span1.classList.remove("rotate45deg");
    span1.style.backgroundColor = "#fff";
    span3.classList.remove("rotate-45deg");
    span3.style.backgroundColor = "#fff";
    header_phone.style.color = "#fff";
    icons.forEach((icon) => {
      icon.style.color = "#fff";
    });
    divs.forEach((div) => {
      div.classList.remove("mobileBorder");
    });
    clicked = false;
  } else {
    mobileHeader.style.display = "block";
    header.style.backgroundColor = "#fff";
    logo.style.color = "#000";
    header.style.color = "#000";
    span1.classList.add("rotate45deg");
    span1.style.backgroundColor = "#000";
    span3.classList.add("rotate-45deg");
    span3.style.backgroundColor = "#000";
    header_phone.style.color = "#000";
    icons.forEach((icon) => {
      icon.style.color = "#000";
    });
    divs.forEach((div) => {
      div.classList.add("mobileBorder");
    });
    clicked = true;
  }
};

hamburger.addEventListener("click", handleMobileMenu);
