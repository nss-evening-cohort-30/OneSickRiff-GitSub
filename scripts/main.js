import { renderToDom } from "../utils/renderToDom.js";
import { packages } from "../data/packages.js";
import { projects } from "../data/projects.js";
import { repos } from "../data/repos.js";

let projectTotal = projects.length;
let repoTotal = repos.length;
let packageTotal = packages.length;

const projectsCard = (object) => {
  return `
  <div class="card m-1" style="width: 18rem;">
    <div class="card-body">
      <h5 class="txt">${object.project_title}</h5>
      <p class="txt">${object.project_description}</p>
    </div>
  </div>`;
};

const reposCard = (object) => {
  return `
  <div class="card m-1" style="width: 18rem;">
    <div class="card-body">
      <h5 class="txt">${object.repo_name}</h5>
      <p class="txt">${object.repo_description}</p>
    </div>
  </div>`;
};

const packagesCard = (object) => {
  return `
  <div class="card m-1" style="width: 18rem;">
    <div class="card-body">
      <h5 class="txt">${object.package_title}</h5>
      <p class="txt">${object.package_description}</p>
    </div>
  </div>`;
};

const createItem = (type) => {
  if (type == "proj") {
    const projectObj = {
      project_id: projectTotal += 1,
      project_title: document.querySelector('#name').value,
      project_description: document.querySelector('#desc').value,
      public: false,
      open: true
    }
    projects.push(projectObj)
  } else if (type == "rep") {
    const reposObj = {
      repo_id: repoTotal += 1,
      repo_name: document.querySelector('#name').value,
      repo_description: document.querySelector('#desc').value,
      pinned: false,
      star: true
    }
    repos.push(reposObj)
  } else if (type == "pinnedRep") {
    const reposObj = {
      repo_id: repoTotal += 1,
      repo_name: document.querySelector('#name').value,
      repo_description: document.querySelector('#desc').value,
      pinned: true,
      star: true
    }
    repos.push(reposObj)  
  } else if (type == "pack") {
    const packageObj = {
      package_id: packageTotal += 1,
      package_title: document.querySelector('#name').value,
      package_description: document.querySelector('#desc').value
    }
    packages.push(packageObj)
  }
}

const renderedCards = (array, type) => {
  let finalRender = '';
  array.forEach(item => {
    if (type == "proj") {
      finalRender += projectsCard(item)
    } else if (type == "rep") {
      finalRender += reposCard(item)
    } else if (type == "pack") {
      finalRender += packagesCard(item)
    }
  });
  return finalRender
};

const renderedPinnedRepos = (array) => {
  let finalRender = ''
  const pinnedRepo = array.filter((item) => item.pinned === true)
  pinnedRepo.forEach(repo => {
    finalRender += reposCard(repo)
  });
  return finalRender
}

const createData = (event) => {
  event.preventDefault();
  if (event.target.id === "project-submit-btn") {
    createItem("proj")
    document.querySelector('#name').value = ''
    document.querySelector('#desc').value = ''
    renderToDom("#cards", renderedCards(projects, "proj"))
  }
  if (event.target.id === "repo-submit-btn") {
    createItem("rep")
    document.querySelector('#name').value = ''
    document.querySelector('#desc').value = ''
    renderToDom("#cards", renderedCards(repos, "rep"))
  }
  if (event.target.id === "pinned-repo-submit-btn") {
    createItem("pinnedRep")
    document.querySelector('#name').value = ''
    document.querySelector('#desc').value = ''
    console.log(renderedPinnedRepos(repos))
    renderToDom("#cards", renderedPinnedRepos(repos))
  }
  if (event.target.id === "package-submit-btn") {
    createItem("pack")
    document.querySelector('#name').value = ''
    document.querySelector('#desc').value = ''
    renderToDom("#cards", renderedCards(packages, "pack"))
  }
}

const cardsFilter = () => {
  if (isOverviewPage) {
    renderToDom("#cards", renderedPinnedRepos(repos))
  } else if (isPackagesPage){
    renderToDom("#cards", renderedCards(packages, "pack"))
  } else if (isProjectsPage){
    renderToDom("#cards", renderedCards(projects, "proj"))
  } else if (isReposPage){
    renderToDom("#cards", renderedCards(repos, "rep"))
  }
}

// START APP
const startApp = () => {
  cardsFilter()
  document.querySelector('#create-form').addEventListener('click', createData);
}

startApp();
