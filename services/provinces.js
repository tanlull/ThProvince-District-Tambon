const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getProvince(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT ProvinceThai as province
    FROM Province order by ProvinceThai LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function getDistrict(page = 1, province) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `select d.DistrictThaiShort as district
    from Province p,District d
    where p.ProvinceThai = '${province}'
    and p.ProvinceID  = d.ProvinceID
    order by d.DistrictThaiShort
    LIMIT ${offset},${config.listPerPage}`
  );
  const dataJson = helper.emptyOrRows(rows);
  const data = dataJson.map((obj) => obj.district); // Map only values to list
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function getTambon(page = 1, province, tambon) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `select t.TambonThaiShort as tambon
    from Province p,District d,Tambon t
    where p.ProvinceThai = '${province}'
    and p.ProvinceID  =d.ProvinceID 
    and d.DistrictID =t.DistrictID
    and d.DistrictThaiShort = '${tambon}'
    order by t.TambonThaiShort
    LIMIT ${offset},${config.listPerPage}`
  );
  const dataJson = helper.emptyOrRows(rows);
  const data = dataJson.map((obj) => obj.tambon); // Map only values to list
  const meta = { page };

  return {
    data,
    meta,
  };
}

module.exports = {
  getProvince,
  getDistrict,
  getTambon,
};
