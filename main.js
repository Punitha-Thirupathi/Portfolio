const iconToggle = document.querySelector(".toggle_icon");
const navbarMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu_link");
const iconClose = document.querySelector(".close_icon");

iconToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});
iconClose.addEventListener("click", () => {
  navbarMenu.classList.remove("active");
});
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
  });
});

// background header change
function scrollHeader() {
  const header = document.getElementById("header");
  this.scrollY >= 20
    ? header.classList.add("active")
    : header.classList.remove("active");
}
window.addEventListener("scroll", scrollHeader);

// hero type effect

const typed = document.querySelector(".typed");
if (typed) {
  let typed_strings = typed.getAttribute("data-typed-items");
  typed_strings = typed_strings.split(",");
  new Typed(".typed", {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
}

// scroll section active links

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;

    let sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

//education Scroll

const pages = document.querySelectorAll(".page");
const education = document.querySelector(".education");

function educationActive() {
  const scrollY = window.pageYOffset;
  /* console.log("scrolling"); */

  pages.forEach((page) => {
    const sectionHeight = page.offsetHeight;
    const sectionTop = page.offsetTop - 120;

    let sectionId = page.getAttribute("id");
    

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".education_tabs a[href*=" + sectionId + "]")
        .classList.add("current");
    } else {
      document
        .querySelector(".education_tabs a[href*=" + sectionId + "]")
        .classList.remove("current");
    }
  });
}

window.addEventListener("scroll", educationActive);

//project section

let filterItems = document.querySelectorAll(".project_filters li");

function activeProject() {
  filterItems.forEach((el) => {
    el.classList.remove("filter-active");
    this.classList.add("filter-active");
  });
}

filterItems.forEach((el) => {
  el.addEventListener("click", activeProject);
});

//Mixitup js - project

let mixerProject = mixitup(".project_wrap-conatainer", {
  selectors: {
    target: ".project_item",
  },
  animation: {
    duration: 300,
  },
});
//testimonial Swiper
let swiper = new Swiper(".testimonial_container", {
  effect: "slide",
  loop: true,
  slidesPerview: 1,
  grabCursor: true,
  spaceBetween: 100,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});
