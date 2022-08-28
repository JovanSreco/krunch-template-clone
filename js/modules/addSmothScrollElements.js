function addSmothScrollElements(elements, navContainer, navToggle, navbar) {
  elements.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navContainer.style.setProperty("--max-height", "0px");
      navToggle.classList.remove("active");

      const id = e.target.getAttribute("href").slice(1);
      const element = document.getElementById(id);
      const navHeight = navbar.getBoundingClientRect().height;
      let position = element.offsetTop - navHeight - 15;
      if (e.target.classList.contains("btn--blue")) {
        position += 15;
      }

      window.scrollTo({
        left: 0,
        top: position,
        behaviour: "smooth",
      });
    });
  });
}

export default addSmothScrollElements;
