'use strict';

function Airport() {
  this._hangar = []; 
}

Airport.prototype.planes = function() { 
  return this._hangar; 
}
Airport.prototype.landPlane = function(plane) {
  if(this.isStormy() === true) {
    throw Error("Cannot take off in stormy weather");
  } else {
    this._hangar.push(plane);
  }
}

Airport.prototype.takeOffPlane = function(plane){
  this._hangar = [];
}

Airport.prototype.isStormy = function(){
  return false;
}
