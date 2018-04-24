'use strict';

describe('Statement', function() {

  it('is an instance of Statement', function() {
    expect(statement).toEqual(jasmine.any(Statement))
  });

  it('has a transactions log property', function() {
    expect(statement.log).toBe(transactionsLog)
  });

  describe('#addTransaction', function() {

    beforeEach(function() {
      spyOn(transactionsLog, 'addTransaction');
    });

    it('adds transaction to the statement log', function() {
      statement.addTransaction(100);
      expect(statement.log.addTransaction).toHaveBeenCalled();
    });
  });
});
