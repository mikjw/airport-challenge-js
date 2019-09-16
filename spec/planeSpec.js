'use strict';

describe('Plane', function() {
  var plane;
  var airport;
  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLandig']);
  });
  it('can land at an airport', function() {
    plane.land(airport);
    expect(airport.clearForLandig).toHaveBeenCalledWith(plane);
  });
});
