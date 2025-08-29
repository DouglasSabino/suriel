const { db } = require('./connection');

const modelReports = {
  postReports: async () => {
    const SQL_POST_REPORTS = "INSERT INTO reservations() VALUES ()"
    await db.execute(SQL_POST_REPORTS, []);
  },
}

module.exports = { modelReports };