'use strict';
module.exports = function () {
  return Hoist.bucket.set('test').then(function () {
      console.log(Hoist.connector);
      var partner = Hoist.connector('xero-partner');
      return partner.init().then(function () {
        return partner.get('/invoices');
      });
    })
    .catch(function (err) {
      Hoist.log(err.message, err.stack);
    });
};
