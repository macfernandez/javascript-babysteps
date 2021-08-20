//const sent="Was it a car or a cat I saw"
const sent="Hey how are you"

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
    let palindrome = sameChar.every(c => c === true);
    return palindrome
}

console.log(isPalyndrom(sent))