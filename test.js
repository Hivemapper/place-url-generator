var myModule = require('./index.js');
var canonicalPathForPlace = myModule.canonicalPathForPlace;
var placeIdFromSlug = myModule.placeIdFromSlug;

exports.simpleName = function(test) {
  var path = canonicalPathForPlace('Place Name', 'asdf1234', 21.12345, -110.12345);
  test.expect(1)
  test.equal(path, '/place/place-name-asdf1234')
  test.done();
};

exports.hyphenInName = function(test) {
  var path = canonicalPathForPlace('Place - Name', 'asdf1234', 21.12345, -110.12345);
  test.expect(1)
  test.equal(path, '/place/place-name-asdf1234')
  test.done();
};

exports.specialCharacters = function(test) {
  var path = canonicalPathForPlace("Place Name ./\\()\"':,.;<>~!@#$%^&*|+=[]{}`~?-", 'asdf1234', 21.12345, -110.12345);
  test.expect(1)
  test.equal(path, '/place/place-name-asdf1234')
  test.done();
};

exports.longName = function(test) {
  var path = canonicalPathForPlace("Place Name Place Name Place Name Place Name Place Name Place Name Place Name Place Name ", 'asdf1234', 21.12345, -110.12345);
  test.expect(1)
  test.equal(path, '/place/place-name-place-name-place-name-pl-asdf1234')
  test.done();
};

exports.placeIdFromSlug = function(test) {
  test.expect(2)
  test.equal('asdf1234', placeIdFromSlug('pretty-name-asdf1234'));
  test.equal('asdf1234', placeIdFromSlug('asdf1234'));
  test.done();
};
