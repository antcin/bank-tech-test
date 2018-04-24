'use strict';
(function(exports) {

  function Statement(log = new TransactionsLog()) {
    this.log = log;
  }


  Statement.prototype.addTransaction = function(transaction) {
    this.log.addTransaction(transaction);
  };

  exports.Statement = Statement;
})(this);
