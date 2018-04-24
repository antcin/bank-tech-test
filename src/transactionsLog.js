'use strict';

(function(exports){
  function TransactionsLog(transactions = []){
    this.transactions = transactions;
  };

  TransactionsLog.prototype.addTransaction = function(transaction) {
    this.transactions.push(transaction);
  };

  exports.TransactionsLog = TransactionsLog;
})(this);
