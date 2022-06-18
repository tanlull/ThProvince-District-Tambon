const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "localhost",
    user: "root",
    password: "toor",
    database: "ProvinceDB",
  },
  listPerPage: 50,
};
module.exports = config;
