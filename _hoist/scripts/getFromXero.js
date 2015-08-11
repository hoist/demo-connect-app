'use strict';
module.exports = function () {
  return Hoist.connector('xero-partner').get('/invoices');
};
