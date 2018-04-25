var Account = require('./src/account.js');

var account = new Account();
account.deposit(5000);
account.deposit(1520);
account.withdraw(400);
account.withdraw(260);


console.log(account.displayStatement());
