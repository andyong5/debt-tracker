const express = require("express");
const router = express.Router();
const pool = require("./db");

// router.get("/", async (req, res, next) => {
//   console.log("got in here");
//   // pool.query("SELECT * FROM accounts", (err, res) => {
//   //   console.log("in here2");
//   //   if (err) {
//   //     throw err;
//   //   }
//   //   console.log("user:", res.rows[0]);
//   // });
//   const d = await pool.query("SELECT * from accounts");
//   await pool.end();
//   console.log(d);
//   res.json({ message: "hi" });
// });
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
      console.log(result);
      res.json({ message: "hi" });
    });
  });
  res.json({ message: "hi" });
});

module.exports = router;
