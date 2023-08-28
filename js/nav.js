const NavPages = {
  home: "/",
  about: "/about",
  contact: "/contact",
  projects: "/projects",
};

const url = window.location.href;
const urlSplit = url.split("/");
const urlString = `/${urlSplit[3]}`;

function setActivePage() {
  const navLinks = document.querySelectorAll(".nav-link");
  Object.keys(NavPages).forEach((key) => {
    if (urlString === NavPages[key]) {
      document.title = `infs.world | ${key}`;
    }
  });

  navLinks.forEach((link) => {
    if (urlString === NavPages[url]) {
      link.classList.add("nav-active");
    }
  });
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
