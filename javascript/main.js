const navbar = document.querySelector("nav")

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("nav-fixed")
  } else {
    navbar.classList.remove("nav-fixed")
  }
})