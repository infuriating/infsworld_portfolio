let projectsDiv = document.querySelector(".project-container");

function renderProjects() {
  for (let i = 0; i < Projects.length; i++) {
    projectsDiv.innerHTML += `
        <div class="project">
            <div class="project-image">
                <img src="${Projects[i].image}" alt="${Projects[i].name}">
            </div>
            <div class="project-info">
                <h2>${Projects[i].name}</h2>
                <p>${Projects[i].description}</p>
            </div>
            <div class="project-technologies">
                <h3>Tools</h3>
                <div class="project-technologies_images">
                    ${Projects[i].technologies
                      .map(
                        (technology) =>
                          `<img src="${technology.icon}" alt="${technology.name}" title="${technology.name}">`
                      )
                      .join("")}

                </div>
            </div>  
        </div>
        `;
  }
}

renderProjects();
