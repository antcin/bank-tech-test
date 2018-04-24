var today;
var yesterday;
var dayBeforeYesterday;
var firstTransaction;
var secondTransaction;
var thirdTransaction;
var transactions;
var transactionsLog;
var statement;


beforeEach(function() {
  today = new Date(2018, 4, 23);
  yesterday = new Date(2018, 4, 22);
  dayBeforeYesterday = new Date(2018, 4, 21);

  jasmine.clock().install();
  jasmine.clock().mockDate(today);

  firstTransaction = new Transaction(100.00, 100.00, dayBeforeYesterday);
  secondTransaction = new Transaction(50.00, 150.00, yesterday);
  thirdTransaction = new Transaction(20.00, 170.00, today);
  transactions = [firstTransaction, secondTransaction];

  transactionsLog = new TransactionsLog(transactions);
  statement = new Statement(transactionsLog);
});

afterEach(function () {
  jasmine.clock().uninstall();
});
