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
      "select acc2.name \
      from accounts \
      acc1 join friends on acc1.user_id = friends.user1 \
      join accounts acc2 on friends.user2 = acc2.user_id \
      where acc1.name = $1",
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
