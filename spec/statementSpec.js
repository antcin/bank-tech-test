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
      statement.addTransaction(100.00);
      expect(statement.log.addTransaction).toHaveBeenCalled();
    });
  });

  describe('#show', function() {
    var headings;

    beforeEach(function() {
      headings = 'date || credit || debit || balance'
    });

    it('shows the headings', function() {
      expect(statement.show()).toContain(headings);
    });

    it('shows the date in the right format', function() {
      expect(statement.show()).toContain('22/04/2018');
    });

    it('shows the right transaction amount when depositing money', function() {
      statement.addTransaction(thirdTransaction);
      expect(statement.show()).toContain(20.00);
    });

    it('shows the right transaction amount when withdrawing', function() {
      statement.addTransaction(fourthTransaction);
      expect(statement.show()).toContain(10.00);
    });
  });
});
