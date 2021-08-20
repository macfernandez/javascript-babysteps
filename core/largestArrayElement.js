let numbers = [23, 81, 14, 5, 33, 631, 47, 78, 99]

let biggestNum=numbers[0]
for (n of numbers){
    if (n>biggestNum){
        biggestNum=n
    }
}
console.log(biggestNum)