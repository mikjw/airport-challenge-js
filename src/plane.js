'use strict';

function Plane() {};

Plane.prototype.land = function(airport){
  airport.clearForLandig(this);
  this._location = airport;
};

Plane.prototype.takeOff = function(airport){
  this._location.clearForTakeOff();
};