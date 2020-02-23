import categoriesRouter from './api/controllers/categories/router'
import moviesRouter from './api/controllers/movies/router'
export default function routes(app) {
  app.use('/api/v1/categories',categoriesRouter);
  app.use('/api/v1/movies',moviesRouter);
};
