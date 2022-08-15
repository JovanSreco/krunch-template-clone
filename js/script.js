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
  } else if (scrollHeight < headerHeight) {
    navbar.classList.remove("navbar--fixed");
  }
});

// *** SMOTH SCROLL ***
const navLinks = document.querySelectorAll("[data-navbar-link]");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navContainer.style.setProperty("--max-height", "0px");
    navToggle.classList.remove("active");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const position = element.offsetTop - navHeight - 15;
    // setActiveLink(id);
    console.log(element.offsetTop);
    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

// *** CHANGE ACTIVE LINKS BASED ON THE SCROLL POSITION ***
// display all items when page loads
// let lastKnownScrollPosition = 0;
// let ticking = false;
// let linkIdsOffset;
// window.addEventListener("DOMContentLoaded", function () {
//   linkIdsOffset = [...navLinks].reduce((arr, element) => {
//     const id = element.getAttribute("href").slice(1);
//     const offSet = element.getBoundingClientRect().top;
//     console.log(arr);
//     return arr.concat({ id, offSet });
//   }, []);
// });

// document.addEventListener("scroll", (e) => {
//   lastKnownScrollPosition = window.scrollY;
//   console.log(window.scrollY);
//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       doSomething(lastKnownScrollPosition);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });

// function doSomething(scrollPos) {
  // Do something with the scroll position
}
