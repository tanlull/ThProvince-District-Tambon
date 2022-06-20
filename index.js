const express = require("express");
const app = express();
const config = require("./config");
const port = config.port;
const jwt = require("jwt-simple");

const provinceRouter = require("./routes/provinces");

//  login return jwt

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //ทำให้รับ json จาก body ได้
const loginMiddleware = (req, res, next) => {
   if(req.body.username === config.auth.username && 
      req.body.password === config.auth.password) next();
   else res.json({ message: "Wrong username and password" }); 
   //ถ้า username password ไม่ตรงให้ส่งว่า Wrong username and password
}

app.post("/login", loginMiddleware, (req, res) => {
   const payload = {
    sub: req.body.username,
    iat: new Date().getTime()//มาจากคำว่า issued at time (สร้างเมื่อ)
 };
 const SECRET = config.auth.secretKey; //ในการใช้งานจริง คีย์นี้ให้เก็บเป็นความลับ
 res.json({ 
  message: "ok",
  authorization : jwt.encode(payload, SECRET),
  })
});


// get jwt from Header authorization
// Passport ใช้ในการ decode jwt ออกมา
const ExtractJwt = require("passport-jwt").ExtractJwt;
//ใช้ในการประกาศ Strategy
const JwtStrategy = require("passport-jwt").Strategy;
const jwtOptions = {
   jwtFromRequest: ExtractJwt.fromHeader("authorization"),
   secretOrKey: config.auth.secretKey,//SECRETเดียวกับตอนencodeในกรณีนี้คือ MY_SECRET_KEY
}
const jwtAuth = new JwtStrategy(jwtOptions, (payload, done) => {
   if(payload.sub=== config.auth.username) done(null, true);
   else done(null, false);
});

const passport = require("passport");
passport.use(jwtAuth);
const requireJWTAuth = passport.authenticate("jwt",{session:false});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/",  (req, res) => {
  res.json({ message: "ok" });
});

app.use("/provinces", requireJWTAuth,provinceRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
