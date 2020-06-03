// This is an array that contains multi-dimentional and each array contains about ten (10) short quotes.
let quotes = [
  [
    "Nothing is as easy as it looks.", "Everything takes longer than you think.", "Anything that can go wrong will go wrong.", "Every solution breeds new problems.", "Nature always sides with the hidden flaw."
  ],
  [
    "Love For All, Hatred For None.", "Change the world by being yourself.", "Every moment is a fresh beginning.", "Never regret anything that made you smile.", "Die with memories, not dreams."
  ],
  [
    "All limitations are self-imposed.", "Tough times never last but tough people do.", "Determine your priorities and focus on them.", "Be so good they can’t ignore you.", "Dream as if you’ll live forever, live as if you’ll die today."
  ]
]

// A console.log() method to execute this code in the browser.
console.log(quotes[0][1], quotes[1][2], quotes[2][2]);



// Using for...of loop to generate this code.
for (let quote of quotes[0]) {
  let randomNumber = Math.floor(Math.random() * quotes[0].length);
  console.log(`${quotes[0][randomNumber]} ${quote}`);
}


// This is the same thing as above but the only difference is that this one use a function.

// function randomQuote() {
//   for (let quote of quotes[0]) {
//     let randomNumber = Math.floor(Math.random() * quotes[0].length);
//     console.log(`${quotes[0][randomNumber]} ${quote}`);
//   }
// }


// Also I tried this one but there is nothing that seem to work and I comment it out.

// let firstQuote = [
//   "Nothing is as easy as it looks.", "Everything takes longer than you think.", "Anything that can go wrong will go wrong.", "Every solution breeds new problems.", "Nature always sides with the hidden flaw."
// ]

// let secondQuote = [
//   "Love For All, Hatred For None.", "Change the world by being yourself.", "Every moment is a fresh beginning.", "Never regret anything that made you smile.", "Die with memories, not dreams."
// ]

// let thirdQuote = [
//   "All limitations are self-imposed.", "Tough times never last but tough people do.", "Determine your priorities and focus on them.", "Be so good they can’t ignore you.", "Dream as if you’ll live forever, live as if you’ll die today."
// ]

// function generateQuote() {
//   let randomNumber1 = Math.floor(Math.random() * (firstQuote.length));
//   let randomNumber2 = Math.floor(Math.random() * (secondQuote.length));
//   let randomNumber3 = Math.floor(Math.random() * (thirdQuote.length));
//   for (let i = 0; i < firstQuote.length + secondQuote.length + thirdQuote.length; i++) {
//     let randomQuote = firstQuote[randomNumber1] + " " + secondQuote[randomNumber2] + " " + thirdQuote[randomNumber3];
//     console.log(randomQuote);
//   }
//   console.log(randomNumber1, randomNumber, randomNumber3)

// }


