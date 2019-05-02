/* First iteration of the program.

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(n) {
  console.log(`Found Waldo at index ${n}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

*/

function findWaldo(arr, found) {
  arr.forEach(function(element, n){
    if (element === "Waldo") {
      found(n);
    }
  })
}

function actionWhenFound(n) {
  console.log(`Found Waldo at index ${n}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);