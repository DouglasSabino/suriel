const { controllerSeller } = require("../contollers/controllerSeller");

const express = require('express');
const { Router } = express;

const routersSellers = Router();

routersSellers.post('/', controllerSeller.postSeller);

module.exports = { routersSellers }