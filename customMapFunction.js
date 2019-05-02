var words = ["ground", "control", "to", "major", "tom"];

function map(arr, funct) {
  var output = [];
  arr.forEach(function(element) {
    output.push(funct(element));
  })
    return output
};


function wordLength(input) {
  return input.length;
};

function upperCase(input) {
  return input.toUpperCase();
};

function backwards(input) {
  return input.split('').reverse().join('');
};

console.log(map(words, wordLength));
console.log(map(words, upperCase));
console.log(map(words, backwards));