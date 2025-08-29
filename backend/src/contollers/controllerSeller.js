const { serviceSeller } = require('../services/serviceSeller');
const { httpstatuscode } = require('../util/httpstatuscode');

const controllerSeller = {
  /** @type {import('express').RequestParamHandler}*/
  postSeller: async (req, res, next) => {
   try {
      console.log(req.body);
      await serviceSeller.postSeller(req.body);
      return res.status(httpstatuscode.CREATED).json({message: "Parceiro Adicionado a Lista"});
   } catch (error) {
    console.log(error);
    next(error);
   }
  }
}

module.exports = { controllerSeller }