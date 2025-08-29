const { modelReports } = require('../models/modelReports');

const serviceReports = {
  postReports: async (body) => {
    const { } = body;

    await modelReports.postReports();
    
    } 
}

module.exports = { serviceReports };