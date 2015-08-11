'use strict';
module.exports = function () {
  var partner = Hoist.connector('xero-partner');
  return parner.get('/invoices');
};
