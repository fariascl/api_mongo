'use strict'

var express = require('express');


var libroController = require('../controllers/libroController');


var api = express.Router();

api.post('/libros', libroController.guardar);
api.get('/libros', libroController.listar)

module.exports = api;