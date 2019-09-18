'use strict';

function Airport() {
  this._hangar = []; 
}

Airport.prototype.planes = function() { 
  return this._hangar; 
}
Airport.prototype.landPlane = function(plane) {
  if(this.isStormy()) {
    throw Error("Cannot land due to stormy weather");
  } else {
    this._hangar.push(plane);
  }
}

Airport.prototype.takeOffPlane = function(plane) {
  if(this.isStormy()) {
    throw Error("Cannot take off due to stormy weather");
  } else {
    this._hangar = [];
  }
}

Airport.prototype.isStormy = function(){
  return false;
}
