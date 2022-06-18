const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "localhost",
    user: "root",
    password: "toor",
    database: "ProvinceDB",
  },
  listPerPage: 100,
};
module.exports = config;
