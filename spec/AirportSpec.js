'use strict';

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('Can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for takeoff', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeoff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('can check for stormy conditions', function(){
    expect(airport.isStormy()).toBeFalsy();
  });

  it('blocks planes takeoff when stormy weather', function(){
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){ airport.clearForTakeoff(plane);}).toThrowError('takeoff not authorized due to stormy weather');
  });
});
