"use strict";
// *** SWIPER JS ***
import swiper from "./modules/swiper.js";
// *** CUSTOM MODULES ***
import setVideoLogic from "./modules/setVideoLogic.js";
import setCloseLinksHeight from "./modules/setCloseLinksHeight.js";
import setNavbarFixed from "./modules/setNavbarFixed.js";
import addSmothScrollPosition from "./modules/addSmothScrollPosition.js";
import setNavLinksOnScroll from "./modules/setNavLinksOnScroll.js";

// *** VIDEO BINDINGS ***
const video = document.querySelector("[data-video-container]");
const videoPlay = document.querySelector("[data-video-play]");
const videoPause = document.querySelector("[data-video-pause]");

setVideoLogic(video, videoPlay, videoPause);

// *** ALL LINK RELATED BINDINGS ***
const navToggle = document.querySelector("[data-hamburger]");
const navContainer = document.querySelector("[data-navbar-container]");
const navList = document.querySelector("[data-navbar-list]");
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");
const navLinks = document.querySelectorAll("[data-navbar-link]");
const btnScrolls = document.querySelectorAll("[data-btn-scroll]");
const sectionElements = [...navLinks]
  .map((element) => {
    return element.getAttribute("href").slice(1);
  })
  .map((id) => {
    return document.getElementById(id);
  });

// *** CLOSE LINKS ****
setCloseLinksHeight(navToggle, navContainer, navList);

// *** FIXED NAVBAR ****
window.addEventListener("scroll", () => {
  setNavbarFixed(navbar, header);
});

setNavbarFixed(navbar, header);

// *** SMOTH SCROLL ***
addSmothScrollPosition(navLinks, navContainer, navToggle, navbar);
addSmothScrollPosition(btnScrolls, navContainer, navToggle, navbar);

//*** CHANGE ACTIVE LINKS BASED ON THE SCROLL POSITION ***

window.addEventListener("scroll", () => {
  setNavLinksOnScroll(sectionElements, navLinks);
});

setNavLinksOnScroll(sectionElements, navLinks);
