//routes/solicitud.js
var express = require("express");
var router = express.Router();
var Solicitud = require("../models/Solicitud");

// Index
router.get("/", function(req, res){
 Solicitud.find({}, function(err, solicituds){
  if(err) return res.json(err);
  res.render("solicituds/index", {solicituds:solicituds});
 })
});
// New
router.get("/new", function(req, res){
 res.render("solicituds/new");
});
// create
router.post("/", function(req, res){
 Solicitud.create(req.body, function(err, solicitud){
  if(err) return res.json(err);
  res.redirect("/solicituds");
 });
});
// show
router.get("/:id", function(req, res){
 Solicitud.findOne({_id:req.params.id}, function(err, solicitud){
  if(err) return res.json(err);
  res.render("solicituds/show", {solicitud:solicitud});
 });
});
// edit
router.get("/:id/edit", function(req, res){
 Solicitud.findOne({_id:req.params.id}, function(err, solicitud){
  if(err) return res.json(err);
  res.render("solicituds/edit", {solicitud:solicitud});
 });
});
// update
router.put("/:id", function(req, res){
 Solicitud.findOneAndUpdate({_id:req.params.id}, req.body, function(err, solicitud){
  if(err) return res.json(err);
  res.redirect("/solicituds/"+req.params.id);
 });
});
// solicituds - destroy // 6
router.delete("/:id", function(req, res){
 Solicitud.remove({_id:req.params.id}, function(err, solicitud){
  if(err) return res.json(err);
  res.redirect("/solicituds");
 });
});

module.exports = router;
