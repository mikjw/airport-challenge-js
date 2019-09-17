'use strict';

describe('Airport',function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });
  it('can land planes', function(){
    airport.landPlane(plane)
    expect(airport.planes()).toEqual([plane]);
  });
  it('can take off planes', function(){
    airport.landPlane(plane);
    airport.takeOffPlane(plane);
    expect(airport.planes()).toEqual([]);
  });
});
