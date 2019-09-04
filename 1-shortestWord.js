/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data 
types.
*/

function findShort(s) {
  listOfWords = s.split(" ");
  // console.log("words: ", listOfWords);
  let lengthsList = [];
  listOfWords.map(word => {
    lengthsList.push(word.length);
  });
  // console.log(lengthsList)
  // console.log(lengthsList.sort(function(a, b){return a-b}))
  lengthsList.sort(function(a, b) {
    return a - b;
  });
  let smallestLength = lengthsList[0];

  return smallestLength;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
);
console.log(
  findShort(
    "MadeSafeCoin 21inc LiteCoin Ethereum ProofOfWork Lisk Dash Bitcoin Waves Steem Lisk"
  )
);
