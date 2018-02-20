var charactersMap={a:"o",c:"d",t:"g"};

function cypherPhrase(charMap, phrase){
    phrase = phrase.split('');    
    return getTransformedArray(phrase, function(letter){
      if(charMap[letter]){
        return charMap[letter];
      }
      else{
        return letter;
      }
    }).join("")
}