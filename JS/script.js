const path = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
let x = 1;
let image;

function Next() {
  image = document.querySelector(".img-slider");
  if (x >= path.length) {
    x = 0;
  }
  image.src = path[x];
  x++;
}

function Prev() {
  image = document.querySelector(".img-slider");
  if (x < 0) {
    x = path.length - 1;
  }
  image.src = path[x];
  x--;
}

const btnLeft = document.querySelector(".prev");
const btnRight = document.querySelector(".next");

btnLeft.addEventListener("click", function () {
  Prev();
});

btnRight.addEventListener("click", function () {
  Next();
});

setInterval(() => {
  Prev();
}, 3000);

const header = document.getElementById("header-top");
const title = document.querySelector(".cody");
const butt_form = document.querySelector(".mostrar");
const butt_up = document.querySelector(".up-head");


window.addEventListener("scroll", function () {
  let line = document.querySelector(".line-dev");
  let position = line.getBoundingClientRect().top;
  let heighScreen = window.innerHeight / 5;

  if (position <= heighScreen) {
    header.style.backgroundColor = "var(--background-sec)";
    title.style.color = "var(--color-first)";
    butt_form.style.display = "block";
    butt_up.style.display = "block";

    a = document.querySelectorAll("#linked #btn-mn");
    a.forEach((b) => {
      b.style.color = "var(--color-first)";
      b.addEventListener("mouseover", function () {
        document.querySelector(".link-main").classList.toggle("newClass");
      });
    });
  } else {
    header.style.backgroundColor = "rgba(104, 15, 112, 0.349)";
    header.style. backdropFilter =  "blur(5px)";
    title.style.color = "var(--color-first)";
    butt_form.style.display = "none";
    butt_up.style.display = "none";

    a = document.querySelectorAll("#linked #btn-mn");
    a.forEach((b) => {
      b.style.color = "var(--color-first)";
    });
  }
});

document.querySelector(".mostrar").addEventListener("click", () => {
  document.querySelector(".footer__form").classList.toggle("form-mst");
});

document.querySelector(".up-head").addEventListener("click", () => {
  window.scrollTo({
    top: -0,
    behavior: "smooth",
  });
});

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector(".cont").classList.toggle("menu-cont");
  document.querySelector(".menu-cont").classList.toggle("cont");
  document.querySelector(".fa-bars").classList.toggle("none-hamb");
  document.querySelector(".none-hamb ").classList.toggle("fa-bars");
});

document.querySelector(".fa-times").addEventListener("click", () => {
  document.querySelector(".menu-cont").classList.toggle("cont");
  document.querySelector(".cont").classList.toggle("menu-cont");
  document.querySelector(".none-hamb").classList.toggle("fa-bars");
  document.querySelector(".fa-bars").classList.toggle("none-hamb");
});

ScrollReveal().reveal(".line-dev");
ScrollReveal().reveal(".line-dev", {
  delay: 500,
});

ScrollReveal().reveal(".line-dev__grid-dev");
ScrollReveal().reveal(".line-dev__grid-dev", {
  delay: 500,
});

ScrollReveal().reveal(".front");
ScrollReveal().reveal(".front", {
  delay: 500,
});

ScrollReveal().reveal(".ruta");
ScrollReveal().reveal(".ruta", {
  delay: 500,
});

ScrollReveal().reveal(".colab");
ScrollReveal().reveal(".colab", {
  delay: 1000,
});

ScrollReveal().reveal(".slider");
ScrollReveal().reveal(".slider", {
  delay: 500,
});

ScrollReveal().reveal(".salud");
ScrollReveal().reveal(".salud", {
  delay: 500,
});

ScrollReveal().reveal(".footer");
ScrollReveal().reveal(".footer", {
  delay: 500,
});