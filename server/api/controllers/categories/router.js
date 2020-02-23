import * as express from 'express';
import controller from './controller'
export default express.Router()
    .post('/', ::controller.create)
    .get('/', ::controller.all)
    .get('/:id_category', ::controller.get)
    .put('/:id_category', ::controller.put)
    .delete('/:id_category', ::controller.delete);
