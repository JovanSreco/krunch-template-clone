"use strict";
function setCloseLinksHeight(navToggle, navContainer, navList) {
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
}

export default setCloseLinksHeight;
