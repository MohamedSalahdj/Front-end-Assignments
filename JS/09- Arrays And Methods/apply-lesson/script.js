// Lesson-01

let friends = ["Ahmed", "Ziad", "Islam", "Esmail", "Hamdy"]

console.log(friends)
console.log(friends[0][friends[0].length-1])

friends[friends.length] = ["Python", "JS", "Devops"]
console.log(friends[friends.length-1][0])

console.log(Array.isArray(friends))


// Lesson-02

let myFriends = ["Ahmed", "Sayed", "Mohamed", "Sayed", "Alaa"];

// myFriends.length = 2;

console.log(myFriends);


// lesson-03

myFriends.unshift("Ziad Tarek", "Ahmed Mamdouh")
console.log(myFriends)
myFriends.push("Elsayed")
console.log(myFriends)

removeFristFriend = myFriends.shift()
console.log(removeFristFriend)
removeLastElement = myFriends.pop()
console.log(removeLastElement)


// Lesson-04
console.log(myFriends)
console.log(myFriends.indexOf("Sayed"))
console.log(myFriends.indexOf("Sayed", 3))
console.log(myFriends.lastIndexOf("Sayed"))
console.log(myFriends.includes("Sayed"))
console.log(myFriends)
console.log("----------------------------")

// Lesson-05
// console.log(myFriends.sort())
// console.log(myFriends.reverse())

// Lesson-06

console.log(myFriends.slice(1))
console.log(myFriends.slice(1, -3))

console.log(myFriends.splice(1, 1)) // from position 0 remove one eelemnt
console.log(myFriends)

// Lesson-07

arr1 = [1, 3, 6, 9]
arr2 = [4, 8, 9]
newArray = myFriends.concat(arr1, arr2)
console.log(newArray)

console.log(newArray.join("||"))