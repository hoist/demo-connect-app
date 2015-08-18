var bluebird = require('bluebird');
module.exports = function (ev, done) {
  Hoist.log('hello');
  var i = 0;
  var promises = [];
  var globalStart = process.hrtime();

  var index = i;
  var startTime = process.hrtime();
  return Bluebird.all(
    Array(100).map(function (index) {
      return Hoist.event.raise('an:event').then(function () {
        var diff = process.hrtime(startTime);
        console.log('raise for ' + index + ' took %d nanoseconds', diff[0] * 1e9 + diff[1]);
      });
    })).then(function () {
    console.log('all done');
  });


}
