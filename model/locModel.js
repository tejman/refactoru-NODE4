function filter(items, f) {
  var output = [];
  for(var i=0, len=items.length; i<len; i++) {
    if(f(items[i])) {
      output.push(items[i]);
    }
  }
  return output;
}

var stops = [
  {name: "Seville", year: "1520", desc: "here is Seville"},
  {name: "Canary Islands", year: "1522", desc: "here is Canary Islands"},
  {name: "Cape Verde", year: "1524", desc: "here is Cape Verde"},
  {name: "Strait of Magellan", year: "1526", desc: "here is Strait of Magellan"},
  {name: "Guam", year: "1528", desc: "here is Guam"},
  {name: "Philippines", year: "1530", desc: "here is Philippines"},
  ]

var locModel = module.exports = {
  findName: function(locName){
    return filter(stops,function(item){
      return(item.name === locName);
    });
  }
}

