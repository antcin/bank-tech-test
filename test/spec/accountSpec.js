'use strict';

describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account(0, statement);
  });

  it('is an instance of Account', function() {
    expect(account).toEqual(jasmine.any(Account))
  });

  it('has a statement property', function() {
    expect(account.statement).toBe(statement)
  })

  describe('When account is initialised', function() {

    it('balance is equal to zero', function() {
      expect(account.balance).toEqual(0);
    });
  });

  describe('#deposit', function() {

    beforeEach(function() {
      spyOn(statement, 'addTransaction');
    });

    it('increases the bank balance', function() {
      account.deposit(100);
      expect(account.balance).toEqual(100);
    });

    it('adds deposit transaction to statement', function() {
      account.deposit(100);
      expect(account.statement.addTransaction).toHaveBeenCalled();
    })
  });

  describe('#withdraw', function() {

    beforeEach(function() {
      spyOn(statement, 'addTransaction')
    });

    it('decreases the bank balance', function() {
      account.withdraw(50)
      expect(account.balance).toEqual(-50)
    });

    it('adds withdraw transaction to statement', function() {
      account.withdraw(50)
      expect(account.statement.addTransaction).toHaveBeenCalled();
    });
  });

  describe('#displayStatement', function() {

    beforeEach(function(){
      spyOn(console, 'log');
    });

    it('returns a string', function() {
      account.displayStatement();
      expect(console.log).toHaveBeenCalled();
    });
  });
});
