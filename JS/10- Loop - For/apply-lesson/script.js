// lesson-01
for (let i=0; i <10 ; i++){
    console.log(i)
}

// lesson-02
console.log("--------------------------")

let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];
let onlyNames = []

// for (let i=0; i < myFriends.length; i++){
//     console.log(myFriends[i])
// }


for (let i = 0; i < myFriends.length; i++){
    if (typeof myFriends[i] === 'string' ){
        onlyNames.push(myFriends[i])
    }
}

console.log(onlyNames)

// lesson-03
console.log("--------------------------")
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++ ){
    console.log("#".repeat(10));
    console.log(products[i])
    console.log("colors: ")
    for (let j = 0; j < colors.length; j++){
        console.log(`- ${colors[j]}`)
    }
    console.log("models: ")
    for (let j = 0; j < models.length; j++){
        console.log(`- ${models[j]}`)
    }
}
// lesson-04
console.log("--------------------------")
products = ["Keyboard", "Mouse", 1, 2, 5, "Pen", "Pad", 15, -1, "Monitor"];

colors = ["Red", "Green", "Black"];

// for(let i = 0; i < products.length; i++){
//     console.log(products[i]);
//     if(products[i] === 'Pen'){
//         break;
//     }
// }

console.log("---------------------")
for(let i = 0; i < products.length; i++){
    if(typeof products[i] === 'number'){
        continue
    }
    console.log(products[i]);
}

console.log("---------------------");
console.log("---------------------");
console.log("---------------------");
mainLoop: for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    nestedLoop: for (let j = 0; j < colors.length; j++) {
      console.log(`- ${colors[j]}`);
      if (colors[j] === "Green") {
        break mainLoop;
      }
    }
  }
console.log("---------------------");
console.log("---------------------");
console.log("---------------------");

// lesson-05