const { httpstatuscode } = require('../util/httpstatuscode');
const { serviceReservations } = require('../services/serviceReservations');

const controllerReservations = {
  /** @type {import('express').RequestParamHandler}*/
  postReservations: async (req, res, next) => {
   try {
     await serviceReservations.postReservations(req.body);
     return res.status(httpstatuscode.CREATED).json({message: "Reserva Feita Com Sucesso"});  
   } catch (error) {
    next(error);
   }
  }
}

module.exports = { controllerReservations }