'use strict';

describe('TransactionsLog', function() {

  var transactionsLog;

  beforeEach(function(){
    transactionsLog = new TransactionsLog(transactions);
  });

  it('is an instance of TransactionsLog', function() {
    expect(transactionsLog).toEqual(jasmine.any(TransactionsLog))
  });

  it('has a transactions property', function() {
    expect(transactionsLog.transactions).toBe(transactions);
  });

  describe('#addTransaction', function(){
    it('adds a transaction to the log', function(){
      transactionsLog.addTransaction(thirdTransaction)
      expect(transactionsLog.transactions).toContain(thirdTransaction)
    });
  });
});
