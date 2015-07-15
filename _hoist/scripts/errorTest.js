module.exports = function () {
  global.Hoist.log('about to throw an error!');
  throw new Error('this is a deliberate error');
}
