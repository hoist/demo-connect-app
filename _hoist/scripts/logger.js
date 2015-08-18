var bluebird = require('bluebird');
module.exports = function (ev, done) {
  Hoist.log('hello');
  var promises = [];
  var globalStart = process.hrtime();

  return Bluebird.all(
      Array(100).map(function (index) {
        var startTime = process.hrtime();
        return Hoist.event.raise('an:event').then(function () {
          var diff = process.hrtime(startTime);
          console.log('raise for ' + index + ' took %d nanoseconds', diff[0] * 1e9 + diff[1]);
        }).catch(function (err) {
          console.log('error', err);
        });
      }))
    .then(function () {
      var diff = process.hrtime(globalStart);
      console.log('all done in %d nanoseconds', diff[0] * 1e9 + diff[1]);
    }).catch(function (err) {
      console.log('error', err);
    });


}
