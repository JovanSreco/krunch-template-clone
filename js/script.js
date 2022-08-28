// *** SWIPER JS ***
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";
// SWIPER JS
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// *** VIDEO LOGIC ***
const video = document.querySelector("[data-video-container]");
const videoPlay = document.querySelector("[data-video-play]");
const videoPause = document.querySelector("[data-video-pause]");

videoPlay.addEventListener("click", () => {
  videoPlay.classList.remove("active");
  videoPause.classList.add("active");
  video.play();
});

videoPause.addEventListener("click", () => {
  videoPause.classList.remove("active");
  videoPlay.classList.add("active");
  video.pause();
});
// *** CLOSE LINKS ****
const navToggle = document.querySelector("[data-hamburger]");
const navContainer = document.querySelector("[data-navbar-container]");
const navList = document.querySelector("[data-navbar-list]");

navToggle.addEventListener("click", () => {
  const containerHeight = navContainer.getBoundingClientRect().height; // Default is 0
  const listHeight = navList.getBoundingClientRect().height;
  if (containerHeight === 0) {
    navContainer.style.setProperty("--max-height", `${listHeight}px`);
    navToggle.classList.add("active");
  } else {
    navContainer.style.setProperty("--max-height", "0px");
    navToggle.classList.remove("active");
  }
});

// *** FIXED NAVBAR ****
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  setNavbarFixed(navbar, header);
});

setNavbarFixed(navbar, header);

function setNavbarFixed(navbar, header) {
  const scrollHeight = window.pageYOffset;
  const headerHeight = header.getBoundingClientRect().height;
  if (scrollHeight > headerHeight) {
    navbar.classList.add("navbar--fixed");
  } else if (scrollHeight < headerHeight) {
    navbar.classList.remove("navbar--fixed");
  }
}

// *** SMOTH SCROLL ***
const navLinks = document.querySelectorAll("[data-navbar-link]");
const btnScrolls = document.querySelectorAll("[data-btn-scroll]");

addSmothScrollsToElements(navLinks);
addSmothScrollsToElements(btnScrolls);

function addSmothScrollsToElements(elements) {
  elements.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navContainer.style.setProperty("--max-height", "0px");
      navToggle.classList.remove("active");

      const id = e.target.getAttribute("href").slice(1);
      const element = document.getElementById(id);
      const navHeight = navbar.getBoundingClientRect().height;
      let position = element.offsetTop - navHeight - 14;
      if (e.target.classList.contains("btn--blue")) {
        position += 14;
      }

      window.scrollTo({
        left: 0,
        top: position,
      });
    });
  });
}

//*** CHANGE ACTIVE LINKS BASED ON THE SCROLL POSITION ***
const sectionElements = [...navLinks]
  .map((element) => {
    return element.getAttribute("href").slice(1);
  })
  .map((id) => {
    return document.getElementById(id);
  });
let currentSectionScroll = "";

window.addEventListener("scroll", () => {
  setNavLinksOnScroll(sectionElements);
});

setNavLinksOnScroll(sectionElements);

function setNavLinksOnScroll(sectionElements) {
  sectionElements.forEach((section) => {
    const scrollPosition = window.pageYOffset;
    const sectionOffsetTop = section.offsetTop;
    const sectionHeight = section.getBoundingClientRect().height;
    if (
      scrollPosition >= sectionOffsetTop &&
      scrollPosition <= sectionHeight + sectionOffsetTop &&
      currentSectionScroll !== section.getAttribute("id")
    ) {
      currentSectionScroll = section.getAttribute("id");
      setNavLinksActive(currentSectionScroll);
    }
  });
}

function setNavLinksActive(sectionId) {
  navLinks.forEach((link) => {
    if (link.dataset.navbarLink === sectionId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
