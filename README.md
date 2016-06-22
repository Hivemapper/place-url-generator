# place-url-generator
Unified logic for generating Hivemapper Place URLS.

Given a place, this function returns a full path to that place (excluding domain and protocol).

## Usage
### Full Path
```
var fullPath = require('place-url-generator').fullPath;
var path = generatePath(place.name, place.id, place.location.lat, place.location.lon);
```

### Just the final component of the path
```
var justNameComponent = require('place-url-generator').justNameComponent;
var prettyName = justNameComponent(place.name, place.id);
```

## Test
```npm test```
