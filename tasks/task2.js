function rollDie(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
  }
  
  console.log("You rolled a:", rollDie()); // Outputs a number between 1 and 6
  