'use strict';

describe('Transaction', function() {

  var transaction;

  beforeEach(function() {
    transaction = new Transaction(100.00, 100.00, today)
  });

  it('is an instance of Transaction', function(){
    expect(account).toEqual(jasmine.any(Transaction))
  });

  it('has an amount property', function() {
    expect(transaction.amount).toBe(100.00)
  });

  it('has a current balance property', function() {
    expect(transaction.currentBalance).toBe(100.00)
  });

  it('has a date property', function() {
    expect(transaction.date).toBe(today)
  })
});
