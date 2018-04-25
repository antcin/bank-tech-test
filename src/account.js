'use strict';
(function(exports) {

  function Account(balance = 0, statement = new Statement()) {
    this.balance = balance;
    this.statement = statement;
  };

  Account.prototype.deposit = function(amount) {
    this.balance += amount;
    this.statement.addTransaction(new Transaction(amount, this.balance))
  };

  Account.prototype.withdraw = function(amount) {
    this.balance -= amount;
    this.statement.addTransaction(new Transaction(-amount, this.balance))

  };

  Account.prototype.displayStatement = function() {
    return this.statement.show();
  };

  exports.Account = Account;
})(this);
