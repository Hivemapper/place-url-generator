justNameComponent = function(name, id) {
  prettyName = name.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text;
  prettyName = prettyName.substring(0,35);

  return `${prettyName}-${id}`;
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

  return `/place/${prettyName}`;
}
