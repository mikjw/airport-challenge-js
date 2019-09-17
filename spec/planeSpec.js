'use strict';

describe('Plane', function() {
  var plane;
  var airport;
  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['landPlane', 'takeOffPlane']);
    // airport = new Airport();
  });
  it('can land at an airport', function() {
    plane.land(airport);
    expect(airport.landPlane).toHaveBeenCalledWith(plane);
  });

  it('can take off from an airport', function() {
    plane.land(airport);
    plane.takeOff();
    expect(airport.takeOffPlane).toHaveBeenCalled();
  });
});
