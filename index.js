var localityUtils = require('locality-utils').default;

function justNameComponent(name, id, maxLength) {
  var pathName = nameToPathParam(name, maxLength);
  if (id) {
    pathName += '-' + id;
  }

  return pathName;
}
module.exports.justNameComponent = justNameComponent;

function nameToPathParam(name, maxLength) {
  if (!maxLength) {
    maxLength = 35;
  }
  var pathName = name.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text;
  pathName = pathName.substring(0, maxLength);

  return pathName;
}

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

function localityFunciton(options) {
  if (
    typeof options.name === 'undefined' ||
    typeof options.stateCode === 'undefined' ||
    typeof options.typeCode === 'undefined' ||
    typeof options.id === 'undefined'
  ) {
    throw 'Missing required paramater for area url generator';
  }

  var pathStateName = nameToPathParam(
    localityUtils.stateCodeToString(options.stateCode)
  );
  var pathAreaType = nameToPathParam(
    localityUtils.typeCodeToString(options.typeCode)
  );
  var prettyName = justNameComponent(options.name, options.id);

  return '/state/' + pathStateName + '/' + pathAreaType + '/' + prettyName;
}
module.exports.canonicalPathForArea = localityFunciton;
module.exports.canonicalPathForLocality = localityFunciton;

module.exports.placeIdFromSlug = function(slug) {
  var slugArray = slug.split('-');
  return slugArray[slugArray.length -1];
}

module.exports.videoNameToPathComponent = function(name) {
  return justNameComponent(name, null, 500);
}
