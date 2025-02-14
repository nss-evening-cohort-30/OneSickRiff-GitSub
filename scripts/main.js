import { renderToDom } from "../utils/renderToDom.js";
import { packages } from "../data/packages.js";
import { projects } from "../data/projects.js";
import { repos } from "../data/repos.js";

const TYPES = {
  proj: 'project',
  rep: 'repository',
  pinnedRep: 'pinnedRepository',
  pack: 'package'
};

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
  if (type == proj) {
    const projectObj = {
      project_id: projectTotal += 1,
      project_title: document.querySelector('#name').value,
      project_description: document.querySelector('#desc').value,
      public: false,
      open: true
    }
    projects.push(projectObj)
  } else if (type == TYPES.rep) {
    const reposObj = {
      repo_id: repoTotal += 1,
      repo_name: document.querySelector('#name').value,
      repo_description: document.querySelector('#desc').value,
      pinned: false,
      star: true
    }
    repos.push(reposObj)
  } else if (type == TYPES.pinnedRep) {
    const reposObj = {
      repo_id: repoTotal += 1,
      repo_name: document.querySelector('#name').value,
      repo_description: document.querySelector('#desc').value,
      pinned: true,
      star: true
    }
    repos.push(reposObj)  
  } else if (type == TYPES.pack) {
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
    switch(type) {
      case TYPES.proj:
        finalRender += projectsCard(item);
        break;
      case TYPES.rep:
        finalRender += rep(item);
        break;
      case TYPES.pinnedRep:
        finalRender += reposCard(item);
        break;
      case TYPES.pack:
        finalRender += packagesCard(item);
        break;
    }
  });
  renderToDom('#cards', finalRender);
};

const renderedPinnedRepos = (array) => {
  let finalRender = ''
  const pinnedRepo = array.filter((item) => item.pinned === true)
  pinnedRepo.forEach(repo => {
    finalRender += reposCard(repo)  // Use reposCard instead of repoCard
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
  renderedCards(projects, TYPES.proj);
  renderedCards(repos, TYPES.rep);
  renderedCards(packages, TYPES.pack);
  renderedCards(pinnedRepository, TYPES.pinnedRep);
  document.querySelector('#create-form').addEventListener('submit', createData);
}

startApp();
