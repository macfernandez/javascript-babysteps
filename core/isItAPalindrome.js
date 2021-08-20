// 👋 Welcome to the JavaScript coding playground.
// Create a function that tests if a string is a pallindrome.

// If you can't think of any strings, try these out:

let palindrome = "Was it a car or a cat I saw"
let nonPalindrome = "Hey how are you"

// Type your code here:

function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

function isPalyndrom(text){
    let textLower = text.toLowerCase().split(' ').join('')
    let textLength = textLower.length-1
    let idx=range(textLength)
    let sameChar=Array()
    for (i in idx){
        if (textLower[i]===textLower[textLength-i]){
            sameChar.push(true)
        }
        else {
            sameChar.push(false)
        }
    }
    let palyndrom = sameChar.every(c => c === true);
    return palyndrom}

console.log(isPalyndrom(palindrome))