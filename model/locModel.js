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
    var matchArray = filter(stops,function(item){
      return(item.name.toLowerCase() === locName.toLowerCase());
    });

    if (matchArray.length===0) {
      var notFound = {
        name: "We did not find a page for "+locName,
        desc: "Magellan never stopped in "+locName,
        year: "Never",
      };
      return(notFound);
    }
    else{
      return matchArray[0];
    }
  },

  findNext: function(locName){

    var nextStopIndex = stops.indexOf(this.findName(locName))+1;

    if (nextStopIndex===0) {
      return;
    }
    else if (nextStopIndex===6) {
      nextStopIndex = 0;
      return(stops[nextStopIndex]);
    }
    else{
      return(stops[nextStopIndex]);
    };
  },

  findPrev: function(locName){

    var prevStopIndex = stops.indexOf(this.findName(locName))-1;

    if (prevStopIndex===-2) {
      return;
    }
    else if (prevStopIndex===-1) {
      prevStopIndex = 5;
      return(stops[prevStopIndex]);
    }
    else{
      return(stops[prevStopIndex]);
    };
  },

  JSONobject: function(obj1, obj2){
    var newObject = {};
    newObject.location = obj1.name;
    newObject.nextlocation = obj2.name;
    return newObject
  }
};

