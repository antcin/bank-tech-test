'use strict'

describe('Account', function () {
  it('is an instance of Account', function () {
    expect(account).toEqual(jasmine.any(Account))
  })

  it('has a statement property', function () {
    expect(account.statement).toBe(statement)
  })

  describe('When account is initialised', function () {
    it('balance is equal to zero', function () {
      expect(account.balance).toEqual(0.00)
    })
  })

  describe('#deposit', function () {
    beforeEach(function () {
      spyOn(statement, 'addTransaction')
    })

    it('increases the bank balance', function () {
      account.deposit(100.00)
      expect(account.balance).toEqual(100.00)
    })

    it('adds deposit transaction to statement', function () {
      account.deposit(100.00)
      expect(account.statement.addTransaction).toHaveBeenCalled()
    })
  })
  describe('#withdraw', function () {
    beforeEach(function () {
      spyOn(statement, 'addTransaction')
    })

    it('decreases the bank balance', function () {
      account.deposit(100.00)
      account.withdraw(50.00)
      expect(account.balance).toEqual(50.00)
    })

    it('throws an error when not enough money available', function () {
      var withdrawal = function () {
        account.withdraw(1000000000)
      }
      expect(withdrawal).toThrow('Error - not enough money in your account.')
    })

    it('adds withdraw transaction to statement', function () {
      account.deposit()
      account.withdraw(50.00)
      expect(account.statement.addTransaction).toHaveBeenCalled()
    })
  })

  describe('#displayStatement', function () {
    it('returns a string', function () {
      expect(typeof account.displayStatement()).toBe('string')
    })
  })
})
