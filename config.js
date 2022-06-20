const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "tan-mysql-service",
    user: "root",
    password: "toor",
    database: "ProvinceDB",
  },
  listPerPage: 100,

  auth:{
    secretKey:"MySecretKeyOfNT",
    username: "nt",
    password: "ntntnt12345",

  },
  port : 3000,

};
module.exports = config;
