var locModel = require('../model/locModel.js');

var locControl = module.exports = {
  
  detail: function(req, res) {
    var loc = req.params.locName;
    var nameObject = locModel.findName(loc);
    var nextObject = locModel.findNext(loc);

    res.render("../views/location", {loc:nameObject, next:nextObject});
  },

  nextJSON: function(req,res){
    var loc = req.query.location;
    var nextStop = locModel.findNext(loc);
    var currentStop = locModel.findName(loc);
    console.log(locModel.JSONobject(currentStop,nextStop));
    res.redirect("/tour/"+loc);
  }

};


