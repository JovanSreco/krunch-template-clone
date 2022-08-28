"use strict";
let currentSectionScroll = "";
function setNavLinksOnScroll(sectionElements, navLinks) {
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
      navLinks.forEach((link) => {
        if (link.dataset.navbarLink === currentSectionScroll) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
}

export default setNavLinksOnScroll;
