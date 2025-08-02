const { controllerReservations } = require('../contollers/controllerReservation');

const express = require('express');
const { Router } = express;

const routersReservations = Router();

routersReservations.post('/', controllerReservations.postReservations);

module.exports = { routersReservations }