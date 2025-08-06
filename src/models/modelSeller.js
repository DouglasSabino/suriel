const { db } = require('./connection');

const modelSeller = {
  postSeller: async (name, phone) => {
      console.log(name, phone);
      const SQL_POST_SELLER = "INSERT INTO sellers(name, phone) VALUES (?,?)"
      await db.execute(SQL_POST_SELLER, [name, phone]);
    },
 
}

module.exports = { modelSeller };