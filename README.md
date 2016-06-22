# place-url-generator
Unified logic for generating Hivemapper Place URLS.

Given a place, this function returns a full path to that place (excluding domain and protocol).

## Usage
var generatePath = require('place-url-generator');
var path = generatePath(place.name, place.id, place.location.lat, place.location.lon);

## Test
```npm test```
