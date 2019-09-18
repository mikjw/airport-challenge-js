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

  it('can check whether weather is stormy', function(){
    expect(airport.isStormy()).toEqual(false);
  });

  it('will not land plane in stormy weather', function(){
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){airport.landPlane(plane)}).toThrow(new Error("Cannot take off in stormy weather"));
  });
});
