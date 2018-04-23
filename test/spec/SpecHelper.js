var today;
var yesterday;

beforeEach(function() {
  today = new Date(2018, 4, 23);
  yesterday = new Date(2018, 4, 22);

  jasmine.clock().install();
  jasmine.clock().mockDate(today);
});

afterEach(function () {
  jasmine.clock().uninstall();
});
