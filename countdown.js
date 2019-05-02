var countdownGenerator = function (x) {
  var n = x

    return function countItDown()
      {if (n > 0) {
        console.log(`T-minus ${n}...`)
      }

      else if (n == 0) {
        console.log('BLAST OFF!')
      }
      else {
        console.log("Rocket's gone dude")
      }
      n--
    }

};

var countdown = countdownGenerator(1);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!