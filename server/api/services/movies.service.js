import l from '../../common/logger';
import updateFile from './updatefile';

const moviesFile = 'server/data/movies.json'
const movies = require('../../data/movies.json')

export class MoviesService {
  all() {
    l.info(`${this.constructor.name}.all()`);
    return Promise.resolve(movies);
  }

  get(id) {
    let movie
    for(const elm of movies){
        if(elm.id == id) {
          movie = elm
        }
    }
    l.info(id, `${this.constructor.name}.get()`);
    return Promise.resolve(movie);
  }

  create(name, description, year, director, actors, poster, category_id) {
    const movie = {
      id: movies[movies.length-1].id + 1,
      name,
      description,
      year: parseInt(year),
      director,
      actors: actors.split(','),
      poster,
      category_id: parseInt(category_id)
    };
    movies.push(movie);

    updateFile(moviesFile, movies);
    l.info(movie, `${this.constructor.name}.create(${name})`);
    return Promise.resolve(movie);
  }

  put(id, name_movie) {
    let movie
    for(const elm of movies){
        if(elm.id == id) {
          movie = elm
          movie.name = name_movie
        }
    }

    updateFile(moviesFile, movies);
    l.info(id, `${this.constructor.name}.put()`);
    return Promise.resolve(movie);
  }

  delete(id) {
    for(const [i, elm] of movies.entries()){
        if(elm.id == id) {
          movies.splice(i, 1)
        }
    }

    updateFile(moviesFile, movies);
    l.info(id, `${this.constructor.name}.delete()`);
    return Promise.resolve(movies);
  }
}

export default new MoviesService();
