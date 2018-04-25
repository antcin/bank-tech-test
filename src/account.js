'use strict';
(function (exports) {
  function Account (balance = 0, statement = new Statement()) {
    this.balance = balance
    this.statement = statement
  }

  Account.prototype.deposit = function (amount) {
    this.balance += amount
    this.statement.addTransaction(new Transaction(amount, this.balance))
  }

  Account.prototype.withdraw = function (amount) {
    this.isEnoughMoneyAvailable(amount)
    this.balance -= amount
    this.statement.addTransaction(new Transaction(-amount, this.balance))
  }

  Account.prototype.isEnoughMoneyAvailable = function (amount) {
    if ((this.balance - amount) < 0) {
      throw 'Error - not enough money in your account.'
    }
  }

  Account.prototype.displayStatement = function () {
    return this.statement.show()
  }

  exports.Account = Account
})(this)
