// lesson one

let myNums = [1, 2, 3, 4, 5, 6];
let newArray = []
function doubleElement(arr){
    for (let i = 0; i < arr.length; i++){
        newArray.push(arr[i] + arr[i])
    }
    return newArray
}

console.log(doubleElement(myNums))


// let selfAdd = myNums.map((element, index, arr) =>{
//     console.log(`This is Current Element ${element}`)
//     console.log(`This is Current Element ${index}`)
//     console.log(`This is Current Element ${arr}`)
//     return element + element
// } )

// console.log(selfAdd)


function selfAdd(number) {
    return number % 2 === 0 ? number *number  : number 
}

let result = myNums.map(selfAdd)

console.log(result)


console.log("========== Lesson-02 ============")

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";


// function swapLetter(letter) {
//     if (letter.toUpperCase() === letter){
//         letter =  letter.toLowerCase()
//     }
//     else {
//         letter = letter.toUpperCase()
//     }
//     return letter
// }   


// function swapLetter(letter) {
//    return letter.toUpperCase() === letter ? letter = letter.toLowerCase() : letter = letter.toUpperCase()
// }   
// let resultSwapCases = swappingCases.split("").map(swapLetter);

let resultSwapCases = swappingCases.split("").map((letter)=>{
    return letter.toUpperCase() === letter ? letter = letter.toLowerCase() : letter = letter.toUpperCase()
}).join("");
console.log(resultSwapCases)



let invNumber = invertedNumbers.map((number) => {
    return number*-1
})

console.log(invNumber)


let igNumber = ignoreNumbers.split("").map((character) => {
    return !parseInt(character) ? character : ""
}).join("")

console.log(igNumber)

console.log("========== Lesson-03 ============")

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];


// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];


let friendsStartWithA = friends.filter((name) => {
    return name.startsWith("A")
});

console.log(friendsStartWithA)


let evennumber = numbers.filter((number) => {
    return number % 2 === 0;
});

console.log(evennumber)

console.log("========== Lesson-04 ============")

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";


let smallWords = sentence.split(" ").filter((word) => {
    return word.length <= 4;
}).join(" ");


console.log(smallWords);


let ignoreNumbersTwo = "Elz123er4o";

let ignumbers = ignoreNumbersTwo.split("").filter((letter) => {
    return !(parseInt(letter))
}).join("");

console.log(ignumbers);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixNumberMultipy = mix.split("").filter((number) => {
    return parseInt(number)
}).map((num) => {
    return num*num
}).join("")

console.log(mixNumberMultipy)


console.log("========== Lesson-05 ============")

let nums = [10, 20, 15, 30];


let summationOfNumber = nums.reduce((accumulator, current) =>{
    return accumulator + current
})


console.log(summationOfNumber)


console.log("========== Lesson-06 ============")


let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

let longestWord = theBiggest.reduce((acc, current) =>{
    return acc.length > current.length ? acc : current
})


console.log(longestWord)


let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];


// - Remove Characters + Use Reduce


let removeATAndGetElzero = removeChars.filter( (character) => {
    return character !== '@'
}).reduce((acc, current) => {
    return acc + current
})

console.log(removeATAndGetElzero)