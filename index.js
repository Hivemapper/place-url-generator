module.exports = function(name, id, lat, lon) {
  if (
    typeof name === 'undefined' ||
    typeof id === 'undefined' ||
    typeof lat === 'undefined' ||
    typeof lon === 'undefined'
  ) {
    throw 'Missing required paramater for place url generator';
  }

  var humanLat = lat.toFixed(5);
  var humanLon = lon.toFixed(5);

  var path = `/${humanLat}/${humanLon}/zoom16`;

  var prettyName;
  if (name) {
    prettyName = name.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text;
    prettyName = prettyName.substring(0,35);
    prettyName = prettyName + '-';
  }

  return `${path}/${prettyName}${id}`;
}
