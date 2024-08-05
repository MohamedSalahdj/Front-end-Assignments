// Assign-01
console.log("======== Assign-01 ============")
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];


let onlyLetter = mix.map((ele) => {
    return typeof ele === 'string' ? ele : "";
}).reduce((acc, current) => {
    return `${acc}${current}`
});

console.log(onlyLetter);



// Assign-02
console.log("======== Assign-02 ============")
let myString = "EElllzzzzzzzeroo";

let withoutdobuleLetter = myString.split("").filter((ele, index, arr)=> {
    return arr[index] !== arr[index+1]
}).join("");


console.log(withoutdobuleLetter)


// Assign-03
console.log("======== Assign-03 ============")
let myArray = ["E", "l", "z", ["e", "r"], "o"];

onlyCharacter = myArray.reduce((acc, current) => {
    return acc + current
}).split(",").join("")

console.log(onlyCharacter)

// console.log("mohamed" + ["A", "H", "m"])


// Assign-04
console.log("======== Assign-04 ============") // [-1, -10, 10, 20, -5, -3]
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];


let onlyNumberAndNegateIt = numsAndStrings.filter((ele)=> {
    return typeof ele === 'number';
}).map((ele)=>{
    return -ele;
});


console.log(onlyNumberAndNegateIt)

// Assign-05
console.log("======== Assign-05 ============") // 500

let nums = [2, 12, 11, 5, 10, 1, 99];


SumAndMul = nums.reduce((acc, current) => {
    return current % 2 === 0 ? acc *=current : acc += current
}, 1)

console.log(SumAndMul)