var myApp = angular.module('myApp',[]);

myApp.controller('MyController', function($scope) {
  $scope.spices = [{"name":"pasilla", "spiciness":"mild"},
                   {"name":"jalapeno", "spiciness":"hot hot hot!"},
                   {"name":"habanero", "spiciness":"LAVA HOT!!"}];
  $scope.spice = "habanero";
});

//Controller test:
describe('myController function', function() {

  describe('myController', function() {
    var $scope;

    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('MyController', {$scope: $scope});
    }));

    it('should create "spices" model with 3 spices', function() {
      expect($scope.spices.length).toBe(3);
    });

    it('should set the default value of spice', function() {
      expect($scope.spice).toBe('habanero');
    });
  });
});
