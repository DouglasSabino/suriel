const { modelSeller } = require('../models/modelSeller');

const serviceSeller = {
  postSeller: async (body) => {
      const { name, phone } = body;
      await modelSeller.postSeller(name, phone);
    } 
}

module.exports = { serviceSeller };