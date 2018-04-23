'use strict';
(function(exports) {

  function Account(balance = 0) {
    this.balance = balance;
  };

  Account.prototype.deposit = function(amount) {
    this.balance += amount;
  };

  Account.prototype.withdraw = function(amount) {
    this.balance -= amount;
  };

  exports.Account = Account;
})(this);
