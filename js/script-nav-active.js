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

  const links = document.querySelectorAll(`nav a`);
  links.forEach(function (link) {
    link.classList.remove("active");
  });

  const activeLinks = document.querySelectorAll(
    `nav a[href="#${currentSection}"]`
  );
  // activeLinks.forEach(function (activeLink) {
  //   activeLink.classList.add("active");
  // });
  const home = links[1],
    ourWorks = links[2],
    ourServices = links[3],
    testimoni = links[4],
    contact = links[5];
  // const bag6 = links[6];
  if (scrollPosition >= 0 && scrollPosition <= 609) {
    home.classList.add("active");
  } else if (scrollPosition >= 610 && scrollPosition <= 1119) {
    ourWorks.classList.add("active");
  } else if (scrollPosition >= 1120 && scrollPosition <= 1650) {
    ourServices.classList.add("active");
  } else if (scrollPosition >= 1666 && scrollPosition <= 1835) {
    testimoni.classList.add("active");
  } else if (scrollPosition >= 1835) {
    contact.classList.add("active");
  }
  console.log(scrollPosition);
  // console.log(bag1);
});
