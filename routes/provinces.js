const express = require("express");
const router = express.Router();
const Provinces = require("../services/provinces");

//Province
//http://localhost:3000/provinces
router.get("/", async function (req, res, next) {
  try {
    res.json(await Provinces.getProvince(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

//District
//http://localhost:3000/provinces/พัทลุง/district
router.get("/:province/district", async function (req, res, next) {
  try {
    res.json(await Provinces.getDistrict(req.query.page, req.params.province));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

//Tambon
//http://localhost:3000/provinces/พัทลุง/district/ป่าพะยอม
router.get("/:province/district/:tambon", async function (req, res, next) {
  try {
    res.json(
      await Provinces.getTambon(
        req.query.page,
        req.params.province,
        req.params.tambon
      )
    );
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;
