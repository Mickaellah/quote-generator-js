// Declare the first variable for the first array that contains few quotes.
  let firstQuote = [
    "Take the risk or lose the chance,", "God is good,", "Yourself is your enemy,", "You are who you are,"
  ];


// Declare the second variable for the second array that contains few quotes.
  let secondQuote = [
    "Making mistakes is no a bad thing,", "Everything is worth trying,", "To try is to risk failure,", "We are raising from our failure,"
  ];


// Declare the third variable for the third array that contains few quotes.
  let thirdQuote = [
    "Be happy with what you have got!", "Never give up.", "Do not lose your hope.", "Being tested is nice."
  ];


// Using the console.log() method to call each array.
  console.log(firstQuote);
  console.log(secondQuote);
  console.log(thirdQuote);


// A function which contain four variable, one of them is a variable that concatinate the arrays and the other three calculate the random number of the arrays.
function newQuotes() {
  let randomNumber1 = Math.floor(Math.random() * firstQuote.length);
  let randomNumber2 = Math.floor(Math.random() * secondQuote.length);
  let randomNumber3 = Math.floor(Math.random() * thirdQuote.length);
  let randomQuote = firstQuote[randomNumber1] + ' ' + secondQuote[randomNumber2] + ' ' + thirdQuote[randomNumber3];
  console.log(randomQuote);
}

newQuotes();



