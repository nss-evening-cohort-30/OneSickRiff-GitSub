export const projects = [
  {
    project_id: 1,
    project_title: "",
    project_description: "",
    public: true,
    open: true
  },
  {
    project_id: 2,
    project_title: "",
    project_description: "",
    public: true,
    open: true
  },
  {
    project_id: 3,
    project_title: "",
    project_description: "",
    public: true,
    open: true
  },
  {
    project_id: 4,
    project_title: "",
    project_description: "",
    public: true,
    open: true
  },
  {
    project_id: 5,
    project_title: "",
    project_description: "",
    public: true,
    open: true
  }
]

export const projectsCard = (object) => {
  return `
  <div class="card d-flex flex-row">
    <h5>${projects.project_title}</h5>
    <p>${projects.project_description}</p>
  </div>`
}

export const renderedProjects = (array) => {
  let finalRender = ''
  array.forEach(project => {
    finalRender += projectsCard(project)
  });
  return finalRender
}
