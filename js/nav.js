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
      navLinks.forEach((link) => {
        if (link.textContent === key.charAt(0).toUpperCase() + key.slice(1)) {
          link.classList.add("nav-active");
        }
      }, key);
    }
  });
}

function handleNavMenu() {
  const navMenu = document.querySelector(".nav-menu");

  if (navMenu.classList.contains("nav-menu_active")) {
    navMenu.style.transform = "translateX(100%)";
    setTimeout(() => {
      navMenu.classList.toggle("nav-menu_active");
    }, 375);
  } else {
    navMenu.classList.toggle("nav-menu_active");
    navMenu.style.transform = "translateX(0%)";
  }
}

function loadNav() {
  const nav = document.querySelector("nav");
  nav.innerHTML = `
    <div class="nav-menu">
      <div class="nav-menu_button" onclick="handleNavMenu()"></div>
      <div class="nav-menu_items">
        <a href="${NavPages.about}" class="nav-menu_link">About</a>
        <a href="${NavPages.contact}" class="nav-menu_link">Contact</a>
        <a href="${NavPages.projects}" class="nav-menu_link">Projects</a>
      </div>
    </div>
    <div class="nav-menu_button" onclick="handleNavMenu()"></div>
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
