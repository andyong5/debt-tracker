var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json([
    { id: 5, name: "Andy" },
    { id: 4, name: "dog" },
  ]);
});

module.exports = router;
