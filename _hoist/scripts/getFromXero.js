'use strict';
module.exports = function () {
  console.log(Hoist.connector);
  var partner = Hoist.connector('xero-public');
  console.log(partner);
  return parner.get('/invoices');
};
