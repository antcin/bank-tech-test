'use strict';
(function(exports) {

  function Statement(log = new TransactionsLog()) {
    this.log = log;
  }

  Statement.prototype.addTransaction = function(transaction) {
    this.log.addTransaction(transaction);
  };

  Statement.prototype.show = function() {
    var print = 'date || credit || debit || balance ' + '\n';
    this.log.transactions.forEach(function(transaction) {
      print += transaction.date.toLocaleDateString();
      print += ' || '
        if (transaction.amount > 0)
          print += transaction.amount.toFixed(2)
        else
          print += ' '
        print += ' || '


        if (transaction.amount < 0)
          print += transaction.amount.toFixed(2)
        else
          print += ' '
        print += ' || '
        print += transaction.currentBalance.toFixed(2);
        print += '\n'
    });
    return print;
  }

  exports.Statement = Statement;
})(this);
