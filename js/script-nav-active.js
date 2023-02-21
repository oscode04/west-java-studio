window.addEventListener("scroll", () => {
  // ini untuk class aktif
  const sections = document.querySelectorAll("section");

  const scrollPosition = window.pageYOffset;

  let currentSection = "";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollPosition >= sectionTop - sectionHeight / 6) {
      currentSection = section.getAttribute("id");
    }
  });

  const links = document.querySelectorAll("nav a");
  links.forEach(function (link) {
    link.classList.remove("active");
  });

  const activeLinks = document.querySelectorAll(
    `nav a[hreff="#${currentSection}"]`
  );
  activeLinks.forEach(function (activeLink) {
    activeLink.classList.add("active");
  });
  console.log(scrollPosition);

  const ourWorks = document.getElementById("xyz");

  if (scrollPosition == 615) {
    ourWorks.classList.add("active");
  }
});
