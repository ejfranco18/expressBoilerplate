import l from '../../common/logger';
import updateFile from './updatefile';

const categoriesFile = 'server/data/categories.json'
const categories = require('../../data/categories.json')
const movies = require('../../data/movies.json')

export class CategoriesService {
  all() {
    l.info(`${this.constructor.name}.all()`);
    return Promise.resolve(categories);
  }

  get(id) {
    let category
    let category_movie = []
    for(const elm of categories){
        if(elm.id == id) {
          category = elm
        }
    }
    for(const elm of movies){
        if(elm.category_id == id) {
          category_movie.push(elm)
        }
    }
    category.movies = category_movie
    l.info(id, `${this.constructor.name}.get()`);
    return Promise.resolve(category);
  }

  create(name, description) {
    const category = {
      id: categories[categories.length-1].id + 1,
      name,
      description,
      movies: []
    };
    categories.push(category);

    updateFile(categoriesFile, categories);
    l.info(category, `${this.constructor.name}.create(${name})`);
    return Promise.resolve(category);
  }

  put(id, name_category) {
    let category
    for(const elm of categories){
        if(elm.id == id) {
          category = elm
          category.name = name_category
        }
    }

    updateFile(categoriesFile, categories);
    l.info(id, `${this.constructor.name}.put()`);
    return Promise.resolve(category);
  }

  delete(id) {
    for(const [i, elm] of categories.entries()){
        if(elm.id == id) {
          categories.splice(i, 1)
        }
    }

    updateFile(categoriesFile, categories);
    l.info(id, `${this.constructor.name}.delete()`);
    return Promise.resolve(categories);
  }
}

export default new CategoriesService();
