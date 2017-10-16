//routes/home.js
var express = require("express");
var router = express.Router();

// Home
router.get("/", function(req, res){
 res.redirect("/solicituds");
});

router.get("/about", function(req, res){
 res.render("home/about");
});

module.exports = router;
