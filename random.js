// This is some random code that generates a random number between 1 and 10
var randomNumber = Math.floor(Math.random() * 10) + 1;

// This code logs the random number to the console
console.log("Random Number: " + randomNumber);

// This code changes the text of the paragraph to include the random number
var paragraph = document.querySelector("p");
paragraph.textContent = "The random number is " + randomNumber;
