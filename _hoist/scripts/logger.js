var bluebird = require('bluebird');
var _ = require('lodash');
module.exports = function (ev, done) {
  Hoist.log('hello');
  var promises = [];
  var globalStart = process.hrtime();

  return bluebird.all(
      _.range(0, 100).map(function (index) {
        var startTime = process.hrtime();
        return Hoist.event.raise('an:event', {
          startTime: startTime
        }).then(function () {
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
