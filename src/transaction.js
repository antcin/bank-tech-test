'use strict';

function Transaction(amount, currentBalance, date = new Date()) {
  this.amount = amount;
  this.currentBalance = currentBalance;
  this.date = date;
}
