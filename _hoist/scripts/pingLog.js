'use strict';
module.exports = function(ev,done){
  Hoist.log('got a ping',ev);
  done();
};
