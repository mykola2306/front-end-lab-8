var charactersMap={a:"o",c:"d",t:"g"};

function decypherPhrase(charMap, phrase) {
  function objectSwapKeyValues(obj) {
    var opposite = {};
    for (var key in obj) {
      opposite[obj[key]] = key;
    }
    return opposite;
  }
  return cypherPhrase(objectSwapKeyValues(charMap), phrase);
}