const parallaxLanding = document.querySelector(".landing-page");
const navbar = document.querySelector(".nav-bar");
const navitems = navbar.querySelector('.nav-items');
const spans = navitems.querySelectorAll('span');
const custom = document.querySelector(".custom");
const mobileMenu = document.querySelector(".mobile-menu");
const ham = document.querySelector(".hamburger");
const span = ham.querySelectorAll("span");
const links = mobileMenu.querySelectorAll(".nav-item");
const home = document.getElementById("home");
const about = document.getElementById("about");
const service = document.getElementById("services");
const client = document.getElementById("clients");
const footer = document.getElementById("footer");

let mobileMenuOpen = false;

const changeNav = (e) => {
  const links = navbar.querySelectorAll('.nav-item');
  const links2 = mobileMenu.querySelectorAll('.nav-item');
  links.forEach(link => link.style.color = 'white');
  links2.forEach(link => link.style.color = 'white');
  spans.forEach(span => span.style.width = '0');
  if(window.pageYOffset>=0 && window.pageYOffset+200<about.offsetTop){
    spans[0].style.width = '100%';
    links[0].style.color = '#b88ae4';
    links2[0].style.color = '#b88ae4';
  }else if(window.pageYOffset+200>=about.offsetTop && window.pageYOffset+200<service.offsetTop){
    spans[1].style.width = '100%';
    links[1].style.color = '#b88ae4';
    links2[1].style.color = '#b88ae4';
  }else if(window.pageYOffset+200>=service.offsetTop && window.pageYOffset+200<client.offsetTop){
    spans[2].style.width = '100%';
    links[2].style.color = '#b88ae4';
    links2[2].style.color = '#b88ae4';
  }else if(window.pageYOffset+200>=client.offsetTop && window.pageYOffset+200<footer.offsetTop){
    spans[3].style.width = '100%';
    links[3].style.color = '#b88ae4';
    links2[3].style.color = '#b88ae4';
  }else{
    spans[4].style.width = '100%';
    links[4].style.color = '#b88ae4';
    links2[4].style.color = '#b88ae4';
  }
};

const handleLandingParallax = (e) => {
  let offset = window.pageYOffset;
  parallaxLanding.style.backgroundPositionY = offset * 0.7 + "px";
};

const handleNav = (e) => {
  let offset = window.pageYOffset;
  if (offset + 280 < window.innerHeight) {
    navbar.style.backgroundColor = "transparent";
  } else if (offset + 280 >= window.innerHeight) {
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

window.addEventListener("scroll", changeNav);
window.addEventListener("scroll", handleLandingParallax);
window.addEventListener("scroll", handleNav);
window.addEventListener("scroll", handleCustom);
ham.addEventListener("click", toggleMobileMenu);
links.forEach((link) =>
  link.addEventListener("click", () => toggleMobileMenu2(link.dataset.name))
);
