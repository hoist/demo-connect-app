var bluebird = require('bluebird');
module.exports = function (ev, done) {
  Hoist.log('hello');
  var i = 0;
  var promises = [];
  var globalStart = process.hrtime();
  while (i < 100) {
    var index = i;
    var startTime = process.hrtime();
    promises.push(Hoist.event.raise('an:event').then(function () {
      var diff = process.hrtime(startTime);
      console.log('raise for ' + i + ' took %d nanoseconds', diff[0] * 1e9 + diff[1]);

    }));
  }
  return bluebird.allSettled(promises).then(function () {
    var diff = process.hrtime(globalStart);
    console.log('raise for all took %d nanoseconds', diff[0] * 1e9 + diff[1]);
  });
}
