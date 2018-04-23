var today;
var yesterday;
var dayBeforeYesterday;
var first_transaction;
var second_transaction;
var third_transaction;
var transactions;


beforeEach(function() {
  today = new Date(2018, 4, 23);
  yesterday = new Date(2018, 4, 22);
  dayBeforeYesterday = new Date(2018, 4, 21);

  jasmine.clock().install();
  jasmine.clock().mockDate(today);

  first_transaction = new Transaction(100.00, 100.00, dayBeforeYesterday);
  second_transaction = new Transaction(50.00, 150.00, yesterday);
  third_transaction = new Transaction(20.00, 170.00, today);
  transactions = [first_transaction, second_transaction];
});

afterEach(function () {
  jasmine.clock().uninstall();
});
