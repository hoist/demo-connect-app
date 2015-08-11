'use strict';
module.exports = function () {
  console.log(Hoist.connector);
  var partner = Hoist.connector('xero-partner');
  return parner.get('/invoices');
};
