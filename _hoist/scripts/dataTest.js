module.exports = function (ev) {
  var logs = global.Hoist.data('Log')
  return logs.save({
      message: 'test log'
    })
    .then(function () {
      return logs.find({});
    }).then(function (logs) {
      return Hoist.log(logs);
    });

}
