import { renderToDom } from "/utils/renderToDom.js";
import { packages } from "/data/packages.js";
import { projects } from "/data/projects.js";
import { repos } from "/data/repos.js";
import { repoList } from "/data/repos.js";

const projectsCard = (projects) => {
  return `
  <div class="card m-1" style="width: 18rem; d-flex flex-row">
    <h5>${projects.project_title}</h5>
    <p>${projects.project_description}</p>
  </div>`
}

const createProject = () => {

}

const renderedCards = (array) => {
  let finalRender = '';
  array.forEach(item => {
    finalRender += projectsCard(item)
  });
  renderToDom('#cards', finalRender);
};

const renderedPinnedRepos = (array) => {
  let finalRender = ''
  const pinnedRepo = array.filter((item) => item.pinned == true)
  pinnedRepo.forEach(repo => {
    finalRender += repoCard(repo)
  });
  return finalRender
}

const createData = (event) => {
  e.preventDefault();
  if (event.target.id === "project-submit-btn") {

    renderToDom("#content-list", renderedCards(projects))
  }
  if (event.target.id === "repo-submit-btn") {
    renderToDom("#content-list", renderedCards(repos))
  }
  if (event.target.id === "pinned-repo-submit-btn") {
    renderToDom("#content-list", renderedPinnedRepos(repos))
  }
  if (event.target.id === "package-submit-btn") {
    renderToDom("#content-list", renderedCards(packages))
  }
   
}

// START APP
const startApp = () => {
  renderedCards(projects);
  ElementInternals 

  document.querySelector("#cards")
  document.querySelector('#create-form').addEventListener('click', createData);
}

startApp();
