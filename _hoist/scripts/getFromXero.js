'use strict';
module.exports = function () {
  console.log(Hoist.connector);
  var partner = Hoist.connector('xero-public');
  return parner.init().then(function (p) {
    return p.get('/invoices');
  });
};
