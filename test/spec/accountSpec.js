'use strict';

describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  describe('When account is opened', function() {


    it('balance is equal to zero', function() {
      expect(account.balance).toEqual(0);
    });
  });

});
