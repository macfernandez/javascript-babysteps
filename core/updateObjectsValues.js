// 👋 Welcome to the JavaScript coding playground.
// Add "German" to the languages array
// Replace the equation with "e = mc^2"
// Add a nobelRecipient key and set it to true
// Delete the quote key
// Log the modified object to the console

// Use this object:
let person = {
    name: "Albert Einstein",
    profession: "Theoretical physicist",
    languages: ["Italian", "English"],
    equation: "c^2 = a^2 + b^2",
    quote: "Life is like riding a bicycle. To keep your balance you must keep moving."
  };
  
  // Type your code here:

person.languages.push("German")
person.equation="e = mc^2"
person.nobelRecipient=true
delete person.quote
console.log(JSON.stringify(person))