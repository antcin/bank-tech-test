'use strict';

describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  describe('When account is initialised', function() {

    it('is an instance of Account', function() {
      expect(account).toEqual(jasmine.any(Account))
    });


    it('balance is equal to zero', function() {
      expect(account.balance).toEqual(0);
    });
  });

  describe('#deposit', function() {
    it('increases the bank balance', function() {
      account.deposit(100)
      expect(account.balance).toEqual(100)
    });
  });


});
