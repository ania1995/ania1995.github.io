const navLinks = document.querySelector(".nav2");
const singleLinks = navLinks.querySelectorAll(".nav__link");

navLinks.addEventListener("click", (event) => {
  for (let i = 0; i < 4; i++) {
    if (singleLinks[i].classList.value.indexOf("hide") > 0) {
      singleLinks[i].classList.remove("hide");
    } else {
      singleLinks[i].classList.add("hide");
    }
  }
});
