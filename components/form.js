export const form = (type) => {
  return `
  <h5>Create a new ${type}</h5>
  <form>
    <div class="form-group">
      <label for="project-name">${type} Name</label>
      <input type="text" class="form-control" id="${type}-name">
    </div>
    <div class="form-group">
      <label for="${type}-desc">Description</label>
      <input type="test" class="form-control" id="${type}-desc">
    </div>
    <button type="submit" class="btn btn-primary" id="${type}-submit-btn">Submit</button>
  </form>
  `
}
