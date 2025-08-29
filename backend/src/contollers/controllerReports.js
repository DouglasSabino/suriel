const { httpstatuscode } = require('../util/httpstatuscode');
const { serviceReports } = require('../services/serviceReports');

const controllerReport = {
  /** @type {import('express').RequestParamHandler}*/
  postReservations: async (req, res, next) => {
   try {
     await serviceReports.postReports(req.body);
     return res.status(httpstatuscode.CREATED).json({message: "OK"});  
   } catch (error) {
    next(error);
   }
  }
}

module.exports = { controllerReport }