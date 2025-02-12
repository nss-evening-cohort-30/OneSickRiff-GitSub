import { renderToDom } from "../utils/renderToDom";
import { packages } from "../data/packages";
import { projects } from "../data/projects";
import { repos } from "../data/repos";
import { profile } from "../components/profile";

const projectsCard = (object) => {
  return `
  <div class="card d-flex flex-row">
    <h5>${projects.project_title}</h5>
    <p>${projects.project_description}</p>
  </div>`
}

const createProject = () => {

}

const renderedCards = (array) => {
  let finalRender = ''
  array.forEach(item => {
    finalRender += projectsCard(item)
  });
  return finalRender
}

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

  document.querySelector('#create-form').addEventListener('click', createData);
  
}

startApp();
