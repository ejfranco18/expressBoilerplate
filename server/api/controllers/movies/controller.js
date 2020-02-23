import MoviesService from '../../services/movies.service';
export class Controller {
  all(req, res) {
    MoviesService
    .all()
    .then(r => res.json(r));
  }

  get(req, res) {
    MoviesService
    .get(req.params.id_movie)
    .then(r => res
      .status(201)
      .location(`/api/v1/movies/${r.id}`)
      .json(r))
  }

  create(req, res) {
    MoviesService
      .create(
        req.body.name,
        req.body.description,
        req.body.year,
        req.body.director,
        req.body.actors,
        req.body.poster,
        req.body.category_id
      )
      .then(r => res
        .status(201)
        .location(`/api/v1/movies/${r.id}`)
        .json(r))
  }

  put(req, res) {
    MoviesService
      .put(req.params.id_movie, req.body.name)
      .then(r => res
        .status(201)
        .location(`/api/v1/movies/${r.id}`)
        .json(r))
  }

  delete(req, res) {
    MoviesService
    .delete(req.params.id_movie)
    .then(r => res
      .status(201)
      .location(`/api/v1/movies/${r.id}`)
      .json(r))
  }
}
export default new Controller();
