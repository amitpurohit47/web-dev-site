const parallaxLanding = document.querySelector(".landing-page");
const navbar = document.querySelector(".nav-bar");
const custom = document.querySelector(".custom");
const mobileMenu = document.querySelector(".mobile-menu");
const ham = document.querySelector(".hamburger");
const span = ham.querySelectorAll("span");
const links = mobileMenu.querySelectorAll(".nav-item");
const home = document.getElementById("home");
const about = document.getElementById("about");
const service = document.getElementById("service");
const client = document.getElementById("client");
const footer = document.getElementById("footer");

let mobileMenuOpen = false;

const changeNav = (e) => {
  const links = navbar.querySelectorAll('a');
  links.forEach(link => link.style.color = 'white');
  if(window.pageYOffset>=0 && window.pageYOffset<about.offsetTop){
    links[0].style.color = '#410b74';
  }
};

const handleLandingParallax = (e) => {
  let offset = window.pageYOffset;
  parallaxLanding.style.backgroundPositionY = offset * 0.7 + "px";
};

const handleNav = (e) => {
  let offset = window.pageYOffset;
  if (offset + 80 < window.innerHeight) {
    navbar.style.backgroundColor = "transparent";
  } else if (offset + 80 >= window.innerHeight) {
    navbar.style.backgroundColor = "#222";
  }
};

const handleCustom = (e) => {
  if (window.innerWidth < 500) {
    custom.style.backgroundSize = 400 - window.pageYOffset / 30 + "%";
    return;
  }
  custom.style.backgroundSize = 200 - window.pageYOffset / 30 + "%";
};

const toggleMobileMenu = (e) => {
  e.preventDefault();
  if (mobileMenuOpen) {
    mobileMenu.classList.remove("menu-active");
    span[0].classList.remove("span1");
    span[1].classList.remove("span2");
    span[2].classList.remove("span3");
  } else {
    mobileMenu.classList.add("menu-active");
    span[0].classList.add("span1");
    span[1].classList.add("span2");
    span[2].classList.add("span3");
  }
  mobileMenuOpen = !mobileMenuOpen;
};

const toggleMobileMenu2 = (e, name) => {
  document.location = `index.html# + ${name}`;
  if (mobileMenuOpen) {
    mobileMenu.classList.remove("menu-active");
    span[0].classList.remove("span1");
    span[1].classList.remove("span2");
    span[2].classList.remove("span3");
  } else {
    mobileMenu.classList.add("menu-active");
    span[0].classList.add("span1");
    span[1].classList.add("span2");
    span[2].classList.add("span3");
  }
  mobileMenuOpen = !mobileMenuOpen;
};

window.addEventListener("scroll", handleLandingParallax);
window.addEventListener("scroll", handleNav);
window.addEventListener("scroll", handleCustom);
ham.addEventListener("click", toggleMobileMenu);
links.forEach((link) =>
  link.addEventListener("click", () => toggleMobileMenu2(link.dataset.name))
);
