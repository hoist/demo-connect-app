'use strict';

//var BBPromise = require('bluebird');
//var _ = require('lodash');


module.exports = function (ev, done) {
  Hoist.log('in poll xero');

  var connector = Hoist.connector('xero');
  Hoist.Context.get()
    .then(function (context) {
      Hoist.log(context.application);
      console.log('new log', connector);
      return connector._connector;
    })
    .then(function (c) {
      Hoist.log('connector settings:', c.settings);
    }).then(function () {
      return connector.get('/manualjournals');
    })
    .then(function (result) {
      Hoist.log('got response from xero', result);
    }).catch(function (err) {
      Hoist.log(err);
      throw err;
    }).nodeify(done);
};
