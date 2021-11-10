'use strict'

var express = require('express');


var libroController = require('../controllers/libroController');


var api = express.Router();

api.post('/libros', libroController.guardar);
api.get('/libros', libroController.listar);
api.get('/libro/:id', libroController.recupera);
api.delete('/libro/:id', libroController.elimina);
api.put('/libro/:id', libroController.editar);
module.exports = api;