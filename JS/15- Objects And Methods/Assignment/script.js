// probelm-01
console.log("----------probelm-01---------")

// Create Your Object Here

let member = {
    name: "Elzero",
    age: 38,
    country: "Egypt",
    fullDetails: function(){
        return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`
    },
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());// My Name Is Elzero, My Age Is 38, I Live in Egypt


// probelm-02
console.log("----------probelm-02---------")


// Method One
// Create Your Object Here
let objMethodOne = {
    property : "Method One"
}

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here

let objMethodTwo = new Object({
    property: "Method Two"
})

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here

objMethodThree = Object.create({
    property: "Method Thre",
})

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here

objMethodFour = Object.assign({property: "Method Four"},objMethodTwo)

console.log(objMethodFour.property); // "Method Four"

console.log(objMethodFour);


// probelm-03
console.log("----------probelm-03---------")

let a = 1;

let threeNums = {
    b: 2,
    c: 3,
    d: 4,
};

let twoNums = {
    e: 5,
    f: 6,
};

// Create Your Object Here in One Line

finalObject = Object.assign({a}, threeNums, twoNums)
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

// probelm-04
console.log("----------probelm-04---------")

// // The Object To Work With
// let myFavGames = {
//     "Trinity Universe": {
//       publisher: "NIS America",
//       price: 40,
//     },
//     "Titan Quest": {
//       publisher: "THQ",
//       bestThree: {
//         one: "Immortal Throne",
//         two: "Ragnarök",
//         three: "Atlantis",
//       },
//       price: 50,
//     },
//     YS: {
//       publisher: "Falcom",
//       bestThree: {
//         one: "Oath in Felghana",
//         two: "Ark Of Napishtim",
//         three: "origin",
//       },
//       price: 40,
//     },
//   };
  
//   // Code One => How To Get Object Length ?
//   let objectLength = Object.keys(myFavGames).length;
  
// for (let i = 0; i < objectLength; i++) {
//     let gameName = Object.keys(myFavGames)[i]
//     console.log(`The Game Name Is ${gameName}`);
//     console.log(`The Publisher Is ${myFavGames[gameName].publisher}`);
//     console.log(`The Price Is ${myFavGames[gameName].price}`)

//     // Check If Nested Object Has Property (bestThree)
//     if ("bestThree" in myFavGames[gameName]) {
//         console.log("- Game Has Releases");
//         console.log(`First => ${myFavGames[gameName].bestThree.one}`);
//         console.log(`Second => ${myFavGames[gameName].bestThree["two"]}`);
//         console.log(`Third => ${myFavGames[gameName].bestThree['three']}`);
//     }
//     console.log("#".repeat(20));
// }

// Second Solution For it 
// The Object To Work With
let myFavGames = {
    "Trinity Universe": {
      publisher: "NIS America",
      price: 40,
    },
    "Titan Quest": {
      publisher: "THQ",
      bestThree: {
        one: "Immortal Throne",
        two: "Ragnarök",
        three: "Atlantis",
      },
      price: 50,
    },
    YS: {
      publisher: "Falcom",
      bestThree: {
        one: "Oath in Felghana",
        two: "Ark Of Napishtim",
        three: "origin",
      },
      price: 40,
    },
};
  
// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
  
for (let i = 0; i < objectLength; i++) {
    let gameName = Object.keys(myFavGames)[i]
    let gameNameObject = myFavGames[gameName]
    console.log(gameNameObject)
    console.log(`The Game Name Is ${gameName}`);
    console.log(`The Publisher Is ${gameNameObject.publisher}`);
    console.log(`The Price Is ${gameNameObject.price}`);
  
    // Check If Nested Object Has Property (bestThree)
    if (gameNameObject.bestThree) {
        let gameReleases = gameNameObject.bestThree
        console.log("- Game Has Releases");
        console.log(`First => ${gameReleases['one']}`);
        console.log(`Second => ${gameReleases['two']}`);
        console.log(`Third => ${gameReleases['three']}`);
    }
    console.log("#".repeat(20));
  }  


  // Ouput
  
  "The Game Name Is Trinity Universe"
  "The Publisher Is NIS America"
  "The Price Is 40"
  "####################"
  "The Game Name Is Titan Quest"
  "The Publisher Is THQ"
  "The Price Is 50"
  "- Game Has Releases"
  "First => Immortal Throne"
  "Second => Ragnarök"
  "Third => Atlantis"
  "####################"
  "The Game Name Is YS"
  "The Publisher Is Falcom"
  "The Price Is 40"
  "- Game Has Releases"
  "First => Oath in Felghana"
  "Second => Ark Of Napishtim"
  "Third => origin"
  "####################"