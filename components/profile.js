export const profile = (object) => {
  return `
  <div class="card">
    <img src="${object.img}" class="card-img">
    <div>
      <h5 class="card-title">${object.name}</h5>
      <p class="card-text">${object.title}</p>
      <p>${object.description}</p>
    </div>
    <div>
      <button></button>
      <button></button>
    </div>
    <div id="social"></div>
    <div id="highlights"></div>
    <div id="orgs"></div>
    <div id="sponsers"></div>
  </div>
  `
}

const object = [
  {
    name: "",
    img: "",
    title: "",
    description: "",
  }
]
