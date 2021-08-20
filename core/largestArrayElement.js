// 👋 Welcome to the JavaScript coding playground.
// Loop through an array, find out the largest number, and output it to the console.

// You can use this array:
let numbers = [23, 81, 14, 5, 33, 631, 47, 78, 99]

// Type your code here:
let biggestNum=numbers[0]
for (n of numbers){
    if (n>biggestNum){
        biggestNum=n
    }
}
console.log(biggestNum)