import * as express from 'express';
import controller from './controller'
export default express.Router()
    .post('/', ::controller.create)
    .get('/', ::controller.all)
    .get('/:id_movie', ::controller.get)
    .put('/:id_movie', ::controller.put)
    .delete('/:id_movie', ::controller.delete);
