function getRandomLetter() {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
  
    const letter = alphabet[Math.floor(Math.random() * alphabet.length)];
  
    return letter;
  }
  