var locModel = require('../model/locModel.js');

var locControl = module.exports = {
  
  detail: function(req, res) {
    var loc = req.params.locName;
    var nameArray = locModel.findName(loc);
    var nameObj = nameArray[0];
    res.render("../views/location", {loc:nameObj});
  }

};


