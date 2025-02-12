export const projects = [
  {
    project_id: 1,
    project_title: "Sample 1",
    project_description: "A very cool description.",
    public: true,
    open: true
  },
  {
    project_id: 2,
    project_title: "Sample 2",
    project_description: "Another much better description.",
    public: false,
    open: false
  },
  {
    project_id: 3,
    project_title: "Sample 3",
    project_description: "A third description that is the best.",
    public: false,
    open: true
  },
  {
    project_id: 4,
    project_title: "Sample 4",
    project_description: "A somehow better description than before.",
    public: true,
    open: false
  },
  {
    project_id: 5,
    project_title: "Sample 5",
    project_description: "An arguably worse description.",
    public: true,
    open: true
  }
]

// const projectsCard = (object) => {
//   return `
//   <div class="card d-flex flex-row">
//     <h5>${projects.project_title}</h5>
//     <p>${projects.project_description}</p>
//   </div>`
// }

// const renderedProjects = (array) => {
//   let finalRender = ''
//   array.forEach(project => {
//     finalRender += projectsCard(project)
//   });
//   return finalRender
// }

// const sort = () => {

// }
