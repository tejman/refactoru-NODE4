var locModel = require('../model/locModel.js');

var locControl = module.exports = {
  
  detail: function(req, res) {
    var loc = req.params.locName;
    var nameArray = locModel.findName(loc);
    res.render("../views/location", {loc:nameArray[0], next:nameArray[1]});
  }

};


