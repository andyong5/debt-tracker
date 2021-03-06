const express = require("express");
const router = express.Router();
const pool = require("./db");
router.get("/", (req, res, next) => {
  pool.connect((err, client, release) => {
    if (err) {
      res.status(400).send(err);
      return console.error("Error acquiring client", err.stack);
    }
    client.query("SELECT * FROM accounts", (err, result) => {
      release();
      if (err) {
        res.status(400).send(err);
        return console.error("Error executing query", err.stack);
      }
      console.log(result.rows);
      res.json(result.rows);
    });
  });
});

module.exports = router;
