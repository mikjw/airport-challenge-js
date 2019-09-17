'use strict';

function Plane() {}

Plane.prototype.land = function(airport){
  airport.landPlane(this);
  this._location = airport;
};

Plane.prototype.takeOff = function() {
  this._location.takeOffPlane();
};
