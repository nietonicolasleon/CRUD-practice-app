const express = require('express');
const route = express.Router()

const services = require('../services/render')

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

module.exports = route