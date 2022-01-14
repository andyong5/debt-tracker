const express = require("express");
const router = express.Router();
const pool = require("./db");

router.post("/", (req, res, next) => {
  const currUser = req.body.currUser;
  pool.connect((err, client, release) => {
    if (err) {
      res.status(400).send(err);
      return console.error("Error acquiring client", err.stack);
    }
    client.query(
      "SELECT t \
      FROM transactions as t\
      JOIN accounts ON transactions.creditor = accounts.user_id \
      JOIN accounts a ON transactions.debitor = a.user_id \
      where accounts.name = $1 \
      GROUP BY \
      a.name",
      [currUser],
      (err, result) => {
        release();
        if (err) {
          res.status(400).send(err);
          return console.error("Error executing query", err.stack);
        }
        console.log(result.rows);
        res.json(result.rows);
      }
    );
  });
});

module.exports = router;
