'use strict';
module.exports = function () {
  console.log(Hoist.connector);
  var partner = Hoist.connector('xero-public');
  return partner.init().then(function () {
    return partner.get('/invoices');
  });
};
