'use strict';

describe('Feature Test:', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to take off from an airport', function() {
    plane.land(airport);
    plane.takeOff();
    expect(airport.planes()).not.toContain(plane);
  });

  it('planes cannot land if weather is stormy', function() {
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function() {airport.landPlane(plane)}).toThrow(new Error("Cannot land due to stormy weather"));
    expect(airport.planes()).not.toContain(plane);
  });

  it('planes cannot take off if weather is stormy', function() {
    plane.land(airport)
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function() {airport.takeOffPlane(plane)}).toThrow(new Error("Cannot take off due to stormy weather"));
    expect(airport.planes()).toContain(plane);
  });
});
