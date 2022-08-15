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
  const scrollHeight = window.pageYOffset;
  const headerHeight = header.getBoundingClientRect().height;
  if (scrollHeight > headerHeight) {
    navbar.classList.add("navbar--fixed");
    navbar.classList.add("navbar--fixed-moveInTopNav");
    navbar.classList.remove("navbar-moveOutTopNav");
  } else if (scrollHeight < headerHeight) {
    navbar.classList.remove("navbar--fixed");
    navbar.classList.remove("navbar--fixed-moveInTopNav");
    navbar.classList.add("navbar-moveOutTopNav");
  }
});
