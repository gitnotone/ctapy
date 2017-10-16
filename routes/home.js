//routes/home.js
var express = require("express");
var router = express.Router();

// Home
router.get("/", function(req, res){
 res.redirect("/solicituds");
});

module.exports = router;
