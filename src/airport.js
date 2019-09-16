'use strict';

function Airport() {
  this._hangar = []; 
};

Airport.prototype.planes = function(){ return this._hangar; };
Airport.prototype.clearForLandig = function(plane){
  this._hangar.push(plane);
};
Airport.prototype.clearForTakeOff = function(plane){
  this._hangar = [];
};
