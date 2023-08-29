let technologyDiv = document.querySelector(".tools-technologies_images"),
  frameworksDiv = document.querySelector(".tools-frameworks_images"),
  librariesDiv = document.querySelector(".tools-libraries_images"),
  databasesDiv = document.querySelector(".tools-databases_images");

function renderTools() {
  for (let i = 0; i < Tools.Technologies.length; i++) {
    technologyDiv.innerHTML += `
        <img src="${Tools.Technologies[i].icon}" alt="${Tools.Technologies[i].name}" title="${Tools.Technologies[i].name}">
        `;
  }
  for (let i = 0; i < Tools.Frameworks.length; i++) {
    frameworksDiv.innerHTML += `
        <img src="${Tools.Frameworks[i].icon}" alt="${Tools.Frameworks[i].name}" title="${Tools.Frameworks[i].name}">
        `;
  }
  for (let i = 0; i < Tools.Libraries.length; i++) {
    librariesDiv.innerHTML += `
        <img src="${Tools.Libraries[i].icon}" alt="${Tools.Libraries[i].name}" title="${Tools.Libraries[i].name}">
        `;
  }
  for (let i = 0; i < Tools.Databases.length; i++) {
    databasesDiv.innerHTML += `
        <img src="${Tools.Databases[i].icon}" alt="${Tools.Databases[i].name}" title="${Tools.Databases[i].name}">
        `;
  }
}

renderTools();
