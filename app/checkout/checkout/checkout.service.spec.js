'use strict';

describe('Service: checkout', function () {

  // load the service's module
  beforeEach(module('pulianiBookStoreApp'));

  // instantiate service
  var checkout;
  beforeEach(inject(function (_checkout_) {
    checkout = _checkout_;
  }));

  it('should do something', function () {
    !!checkout.should.be.true;
  });

});
