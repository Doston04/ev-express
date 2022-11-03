const square = document.querySelector(".square");
const square2 = document.querySelector(".square2");

const options = {
  root: null,
  threeShold: 0.25,
  rootMargin: "-150px 0px 200px 0px",
};

const observer = new IntersectionObserver((entries, options) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  }, options);
});

observer.observe(square);
observer.observe(square2);
