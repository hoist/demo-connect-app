'use strict';

//var BBPromise = require('bluebird');
//var _ = require('lodash');


module.exports = function (ev) {
  Hoist.log('in poll xero', ev);

  var connector = Hoist.connector('xero');
  return connector.get('/contacts')
    .then(function (result) {
      Hoist.log('got response from xero', result);
    });
};
