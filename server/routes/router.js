const express = require('express');
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller');

/**
 *  @description Ruta al root
 *  @method GET /
*/
route.get('/', services.homeRoutes);

/**
 *  @description Ruta a add_vino
 *  @method GET /add-vino
*/
route.get('/add-vino', services.add_vino);

/**
 *  @description Ruta a update_vino
 *  @method GET /update-vino
*/
route.get('/update-vino', services.update_vino);

//API
route.post('/api/vinos', controller.create);

module.exports = route