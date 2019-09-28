const router = require("express").Router();
const conn = require("../../db");

router.get("/feature_properties/", (req, res, next) => {
  const sql = `SELECT * FROM locations `;

  conn.query(sql, (err, results, fields) => {
    results.locations = results.filter(result => result.feature_property === 1);
    res.json(results);
    console.log(results);
  });
});

module.exports = router;
