const NavPages = {
  home: "/",
  about: "/about",
  contact: "/contact",
  projects: "/projects",
};

const url = window.location.href;
const urlSplit = url.substring(url.lastIndexOf("/") + 1);

function setActivePage() {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === NavPages[url]) {
      link.classList.add("nav-active");
    }
  });
  console.log(`Page: ${url}`);
}

function loadNav() {
  const nav = document.querySelector("nav");
  nav.innerHTML = `
    <div class="nav-container">
      <div class="nav-logo">
        <a href="${NavPages.home}">
          <img class="nav-logo_image" src="../media/images/infsworld.png" alt="Logo" />
        </a>
      </div>
      <div class="nav-links">
        <a href="${NavPages.about}" class="nav-link">About</a>
        <a href="${NavPages.contact}" class="nav-link">Contact</a>
        <a href="${NavPages.projects}" class="nav-link">Projects</a>
      </div>
    </div>
  `;
  setActivePage();
}

loadNav();
