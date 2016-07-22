var myModule = require('./index.js');
var canonicalPathForPlace = myModule.canonicalPathForPlace;
var canonicalPathForNFZ = myModule.canonicalPathForNFZ;
var canonicalPathForArea = myModule.canonicalPathForArea;
var placeIdFromSlug = myModule.placeIdFromSlug;

exports.simpleName = function(test) {
  var path = canonicalPathForPlace('Place Name', 'asdf1234');
  var nfzPath = canonicalPathForNFZ('NFZ Name', 'asdf1234');
  var areaPath = canonicalPathForArea('Casco', 'Maine', 'asdf1234');
  test.expect(3)
  test.equal(path, '/place/place-name-asdf1234');
  test.equal(nfzPath, '/no-fly-zone/nfz-name-asdf1234');
  test.equal(areaPath, '/area/casco-maine-asdf1234');
  test.done();
};

exports.hyphenInName = function(test) {
  var path = canonicalPathForPlace('Place - Name', 'asdf1234');
  var areaPath = canonicalPathForArea('Ingold - Mildale', 'California', 'asdf1234');
  test.expect(2)
  test.equal(path, '/place/place-name-asdf1234')
  test.equal(areaPath, '/area/ingold-mildale-california-asdf1234')
  test.done();
};

exports.specialCharacters = function(test) {
  var path = canonicalPathForPlace("Place Name ./\\()\"':,.;<>~!@#$%^&*|+=[]{}`~?-", 'asdf1234');
  var nfzPath = canonicalPathForNFZ("NFZ Name ./\\()\"':,.;<>~!@#$%^&*|+=[]{}`~?-", 'asdf1234');
  test.expect(2)
  test.equal(path, '/place/place-name-asdf1234')
  test.equal(nfzPath, '/no-fly-zone/nfz-name-asdf1234')
  test.done();
};

exports.longName = function(test) {
  var path = canonicalPathForPlace("Place Name Place Name Place Name Place Name Place Name Place Name Place Name Place Name ", 'asdf1234');
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
