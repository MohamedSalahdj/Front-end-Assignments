// Assign - 01 
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
myFriends.length = num
// Method 1
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
// myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Assign - 02
console.log("-------------------------------------------")
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift()
friends.pop()
console.log(friends); // ["Eman", "Osama"]


// Assign - 03
console.log("-------------------------------------------")
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrTwo, arrOne).sort().reverse())
// other solution
console.log(finalArr.concat(arrTwo.pop(), arrOne.reverse(), arrTwo.reverse())); // ["Z", "X", "D", "C", "B", "A"]

// Assign - 04
console.log("-------------------------------------------")
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length].shift().slice(website.length).toUpperCase()); // ZERO


// Assign - 05
console.log("-------------------------------------------")
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];



if (haystack.includes(needle)){
    console.log("Found")
} if (needle === haystack[1]){
    console.log("Found")
}if (haystack.indexOf(needle)){
    console.log("Found")
}

// Assign - 06
console.log("-------------------------------------------")

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(allArrs.concat(arr1, arr2).sort().join("").slice(++arr1.length).toLowerCase()); // fxy