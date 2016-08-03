var localityUtils = require('locality-utils').default;

justNameComponent = function(name, id) {
  var pathName = nameToPathParam(name);

  return pathName + '-' + id;
}

nameToPathParam = function(name) {
  var pathName = name.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text;
  pathName = pathName.substring(0,35);

  return pathName;
}

module.exports.justNameComponent = justNameComponent;
module.exports.canonicalPathForPlace = function(name, id) {
  if (
    typeof name === 'undefined' ||
    typeof id === 'undefined'
  ) {
    throw 'Missing required paramater for place url generator';
  }

  var prettyName;
  if (name) {
    prettyName = justNameComponent(name, id);
  } else {
    prettyName = id;
  }

  return '/place/' + prettyName;
}

module.exports.canonicalPathForNFZ = function(name, id) {
  if (
    typeof name === 'undefined' ||
    typeof id === 'undefined'
  ) {
    throw 'Missing required paramater for no-fly zone url generator';
  }

  var prettyName;
  if (name) {
    prettyName = justNameComponent(name, id);
  } else {
    prettyName = id;
  }

  return '/no-fly-zone/' + prettyName;
}

module.exports.canonicalPathForState = function(stateCode) {
  if (
    typeof stateCode === 'undefined'
  ) {
    throw 'Missing required paramater for state url generator';
  }

  var pathStateName = nameToPathParam(
    localityUtils.stateCodeToString(stateCode)
  );

  return '/state/' + pathStateName;
}

module.exports.canonicalPathForArea = function(
  {name, stateCode, typeCode, id} = {}
) {
  if (
    typeof name === 'undefined' ||
    typeof stateCode === 'undefined' ||
    typeof typeCode === 'undefined' ||
    typeof id === 'undefined'
  ) {
    throw 'Missing required paramater for area url generator';
  }

  var pathStateName = nameToPathParam(
    localityUtils.stateCodeToString(stateCode)
  );
  var pathAreaType = nameToPathParam(
    localityUtils.typeCodeToString(typeCode)
  );
  var prettyName = justNameComponent(name, id);

  return '/state/' + pathStateName + '/' + pathAreaType + '/' + prettyName;
}

module.exports.placeIdFromSlug = function(slug) {
  var slugArray = slug.split('-');
  return slugArray[slugArray.length -1];
}
