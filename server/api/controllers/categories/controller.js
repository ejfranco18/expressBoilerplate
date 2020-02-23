import CategoriesService from '../../services/categories.service';
export class Controller {
  all(req, res) {
    CategoriesService
    .all()
    .then(r => res.json(r));
  }

  get(req, res) {
    CategoriesService
    .get(req.params.id_category)
    .then(r => res
      .status(201)
      .location(`/api/v1/categories/${r.id}`)
      .json(r))
  }

  create(req, res) {
    CategoriesService
      .create(req.body.name, req.body.description)
      .then(r => res
        .status(201)
        .location(`/api/v1/categories/${r.id}`)
        .json(r))
  }

  put(req, res) {
    CategoriesService
      .put(req.params.id_category, req.body.name)
      .then(r => res
        .status(201)
        .location(`/api/v1/categories/${r.id}`)
        .json(r))
  }

  delete(req, res) {
    CategoriesService
    .delete(req.params.id_category)
    .then(r => res
      .status(201)
      .location(`/api/v1/categories/${r.id}`)
      .json(r))
  }
}
export default new Controller();
