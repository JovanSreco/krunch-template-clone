"use strict";
function setNavbarFixed(navbar, header) {
  const scrollHeight = window.pageYOffset;
  const headerHeight = header.getBoundingClientRect().height;
  if (scrollHeight > headerHeight) {
    navbar.classList.add("navbar--fixed");
  } else if (scrollHeight < headerHeight) {
    navbar.classList.remove("navbar--fixed");
  }
}

export default setNavbarFixed;
