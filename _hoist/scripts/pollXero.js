'use strict';

//var BBPromise = require('bluebird');
//var _ = require('lodash');


module.exports = function (ev, done) {
  Hoist.log('in poll xero');

  var connector = Hoist.connector('xero');
  return connector.get('/contacts')
    .then(function (result) {
      Hoist.log('got response from xero', result);
    }).catch(function (err) {
      Hoist.log(err);
      throw err;
    }).nodeify(done);
};
