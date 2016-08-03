# place-url-generator
Unified logic for generating Hivemapper object URLs.

## Methods
## canonicalPathForPlace(name, id) / canonicalPathForNFZ(name, id)

**name**: Plain text string name of object. Can contain spaces and punctuation.

**id**: MongoDB ID of the object.

## canonicalPathForState(stateCode)
**stateCode**: 2 digit numberic string for state. 

**Docs for state codes**: http://www.census.gov/geo/reference/ansi_statetables.html

Throws an error if the stateCode argument is malformed, or if there was no matching state.

##canonicalPathForLocality(options)
**Alias:** `canonicalPathForArea(options)`

| Option | Description | Examples |
| --- | --- | --- |
| name | Full name of locality. Can contain spaces and punctuation. | `San Bruno County` `Burlingame` |
| stateCode | 2 digit numberic string for state. `STATEFP` in Census data. | `'06'` (California) |
| typeCode | 2 digit string from Census. `LSAD` in Census data. | `'25'` (city) |
| id | MongoDB ID of the locality |

All options are required.

Throws an error if the stateCode or typeCode arguments are malformed, or if locality-utils found no match for either.


##justNameComponent(name, id)
```
var justNameComponent = require('place-url-generator').justNameComponent;
var prettyName = justNameComponent(place.name, place.id);
```

# Test
```npm test```
