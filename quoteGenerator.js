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


// A function that contains the random quote, one of them is a variable that concatinate the arrays and the other three calculate the random number of the arrays.

function newQuote() {
  let randomNumber1 = Math.floor(Math.random() * firstQuote.length);
  let randomNumber2 = Math.floor(Math.random() * secondQuote.length);
  let randomNumber3 = Math.floor(Math.random() * thirdQuote.length);

  let randomQuote = firstQuote[randomNumber1] + ' ' + secondQuote[randomNumber2] + ' ' + thirdQuote[randomNumber3];

  console.log(randomQuote);
}
// newQuote();

// A variable that allow the user to enter number of quotes that they want to generate.

let quoteNumber = prompt("How many times do you want to generate a random quote?");

// An if statement which sets the condition for the user to choose number between 1 and 5, and a for loop that loops through the quotes.

if (quoteNumber >= 1 && quoteNumber <= 5) {
  for (let i = 0; i < quoteNumber; i++) {
    newQuote();
  }
}


let bestQuotes = 0;
while (bestQuotes <= 2) {
	let generateDifferentQuotes = newQuote();
	bestQuotes = Number(prompt("Enter a number between 1 or 2 for choosing your quotes:"));
	if (bestQuotes <= 2);
}



