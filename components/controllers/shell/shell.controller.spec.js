'use strict';

describe('Controller: ShellCtrl', function () {

  // load the controller's module
  beforeEach(module('pulianiBookStoreApp'));

  var ShellCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShellCtrl = $controller('ShellCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
