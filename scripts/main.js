import { renderToDom } from "../utils/renderToDom";
import { packages } from "../data/packages";
import { projects } from "../data/projects";
import { repos } from "../data/repos";
import { repoList } from "../data/repos";
import { profile } from "../components/profile";

let projectTotal = projects.length;
let repoTotal = repos.length;
let packageTotal = packages.length;

const projectsCard = (object) => {
  return `
  <div class="card d-flex flex-row">
    <h5>${projects.project_title}</h5>
    <p>${projects.project_description}</p>
  </div>`
}

const reposCard = (object) => {
  return `
  <div class="card d-flex flex-row">
    <h5>${repos.repo_title}</h5>
    <p>${repos.repo_description}</p>
  </div>`
}

const packagesCard = (object) => {
  return `
  <div class="card d-flex flex-row">
    <h5>${packages.package_title}</h5>
    <p>${packages.package_description}</p>
  </div>`
}

const createItem = (type) => {
  if (type == proj) {
    const projectObj = {
      project_id: projectTotal += 1,
      project_title: document.querySelector('#name').value,
      project_description: document.querySelector('#desc').value,
      public: false,
      open: true
    }
    projects.push(projectObj)
  } else if (type == rep) {
    const reposObj = {
      repo_id: repoTotal += 1,
      repo_name: document.querySelector('#name').value,
      repo_description: document.querySelector('#desc').value,
      pinned: false,
      star: true
    }
    repos.push(reposObj)
  } else if (type == pinnedRep) {
    const reposObj = {
      repo_id: repoTotal += 1,
      repo_name: document.querySelector('#name').value,
      repo_description: document.querySelector('#desc').value,
      pinned: true,
      star: true
    }
    repos.push(reposObj)  
  } else if (type == pack) {
    const packageObj = {
      package_id: packageTotal += 1,
      package_title: document.querySelector('#name').value,
      package_description: document.querySelector('#desc').value
    }
    packages.push(packageObj)
  }
}

const renderedCards = (array, type) => {
  let finalRender = ''
  array.forEach(item => {
    if (type == proj) {
      finalRender += projectsCard(item)
    } else if (type == rep) {
      finalRender += reposCard(item)
    } else if (type == pack) {
      finalRender += packagesCard(item)
    }
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
    createItem(proj)
    document.querySelector('#name').value = ''
    document.querySelector('#desc').value = ''
    renderToDom("#content-list", renderedCards(projects, proj))
  }
  if (event.target.id === "repo-submit-btn") {
    createItem(rep)
    document.querySelector('#name').value = ''
    document.querySelector('#desc').value = ''
    renderToDom("#content-list", renderedCards(repos, rep))
  }
  if (event.target.id === "pinned-repo-submit-btn") {
    createItem(pinnedRep)
    document.querySelector('#name').value = ''
    document.querySelector('#desc').value = ''
    renderToDom("#content-list", renderedPinnedRepos(repos))
  }
  if (event.target.id === "package-submit-btn") {
    createItem(pack)
    document.querySelector('#name').value = ''
    document.querySelector('#desc').value = ''
    renderToDom("#content-list", renderedCards(packages, pack))
  }
   
}


// START APP
const startApp = () => {

  document.querySelector('#create-form').addEventListener('click', createData);
  
}

startApp();
