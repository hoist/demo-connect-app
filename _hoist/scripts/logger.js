var bluebird = require('bluebird');
var _ = require('lodash');
module.exports = function (ev, done) {
  Hoist.log('hello');
  var promises = [];
  var globalStart = process.hrtime();
  var arr = {};
  return bluebird.all(
      _.range(0, 1000000).map(function (index) {
        arr[index] = {
          some: 'object',
          in : 'memory'
        };
      }))
    .then(function () {
      var diff = process.hrtime(globalStart);
      console.log('all done in %d nanoseconds', diff[0] * 1e9 + diff[1]);
    }).catch(function (err) {
      console.log('error', err);
    });


}
