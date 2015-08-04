module.exports = function (ev, done) {
  Hoist.log('hello');
  return Hoist.event.raise('an:event');
}
