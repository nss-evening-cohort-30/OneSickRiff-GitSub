export const form = (type) => {
  return `
  <h5>Create a new ${type}</h5>
  <form>
    <div class="form-group">
      <label for="name">${type} Name</label>
      <input type="text" class="form-control" id="name">
    </div>
    <div class="form-group">
      <label for="desc">Description</label>
      <input type="test" class="form-control" id="desc">
    </div>
    <button type="submit" class="btn btn-primary" id="${type}-submit-btn">Submit</button>
  </form>
  `
}
