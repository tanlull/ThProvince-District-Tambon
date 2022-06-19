const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "tan-mysql-service",
    user: "root",
    password: "toor",
    database: "ProvinceDB",
  },
  listPerPage: 100,
};
module.exports = config;
