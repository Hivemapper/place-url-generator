var urlGenerator = require('./index.js');

exports.simpleName = function(test) {
  var path = urlGenerator('Place Name', 'asdf1234', 21.12345, -110.12345);
  test.expect(1)
  test.equal(path, '/21.12345/-110.12345/zoom16/place-name-asdf1234')
  test.done();
};

exports.hyphenInName = function(test) {
  var path = urlGenerator('Place - Name', 'asdf1234', 21.12345, -110.12345);
  test.expect(1)
  test.equal(path, '/21.12345/-110.12345/zoom16/place-name-asdf1234')
  test.done();
};

exports.longCoordinates = function(test) {
  var path = urlGenerator('Place Name', 'asdf1234', 21.123456789, -110.123456789);
  test.expect(1)
  test.equal(path, '/21.12346/-110.12346/zoom16/place-name-asdf1234')
  test.done();
};

exports.shortCoordinates = function(test) {
  var path = urlGenerator('Place Name', 'asdf1234', 21.12, -110.12);
  test.expect(1)
  test.equal(path, '/21.12000/-110.12000/zoom16/place-name-asdf1234')
  test.done();
};

exports.specialCharacters = function(test) {
  var path = urlGenerator("Place Name ./\\()\"':,.;<>~!@#$%^&*|+=[]{}`~?-", 'asdf1234', 21.12345, -110.12345);
  test.expect(1)
  test.equal(path, '/21.12345/-110.12345/zoom16/place-name-asdf1234')
  test.done();
};

exports.longName = function(test) {
  var path = urlGenerator("Place Name Place Name Place Name Place Name Place Name Place Name Place Name Place Name ", 'asdf1234', 21.12345, -110.12345);
  test.expect(1)
  test.equal(path, '/21.12345/-110.12345/zoom16/place-name-place-name-place-name-pl-asdf1234')
  test.done();
};
