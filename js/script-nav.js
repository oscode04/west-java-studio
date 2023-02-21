window.addEventListener("scroll", () => {
  const documentHeight = document.innerHeight;
  const scroll = this.window.scrollY;
  // console.log(scroll);

  const windowHeight = window.innerHeight;
  const value = (scroll / (documentHeight - windowHeight)) * 80;

  // console.log(value);
});

const navbar = document.querySelector("nav");
const navbarHeight = navbar.offsetHeight;

const content = document.querySelector("section");
content.style.top = navbarHeight + "px";

// console.log(navbarHeight);
