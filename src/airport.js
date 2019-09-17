'use strict';

function Airport() {
  this._hangar = []; 
};

Airport.prototype.planes = function(){ return this._hangar; };
Airport.prototype.landPlane = function(plane){
  this._hangar.push(plane);
};

Airport.prototype.takeOffPlane = function(plane) {
  this._hangar = [];
};
