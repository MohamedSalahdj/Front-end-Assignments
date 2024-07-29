// Assign-01

// let start = 10;
// let end = 100;
// let exclude = 40;

// for (start; start <= end; start+=10){
//     if (start === 40){
//         continue
//     }
//     console.log(start)
// }

// Assign-02
// let start = 10;
// let end = 0;
// let stop = 3;

// for (start; start >= stop; start--){
//     if (start >= 10){
//         console.log(`${start}`)
//     }else {
//         console.log(`${end}${start}`)
//     }
// }

// Assign-03


// let start = 1;
// let end = 6;
// let breaker = 2;


// for (;;){
//     console.log(start);
//     for(let j = breaker; j <= breaker*breaker; j+=j){
//         console.log(`-- ${j}`)
//     }
//     start++;
//     if(start === end)break;
// }

// Assign-04
console.log("-----------------")
let index = 10;
let jump = 2;

for (;;) {
    console.log(index)
    index-=jump
    if (index < jump*jump) break;
}


// Assign-05
console.log("-----------------")
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let number = letter.length

for (let i = letter.length - letter.length ; i < friends.length; i++){
    if (friends[i].startsWith(letter.toUpperCase())){
        continue
    }
    console.log(`${number} => ${friends[i]}`)
    number++
}


// Assign-06
console.log("-----------------")
// let start = 0;
// let swappedName = "elZerO";
// let newName = ''
// for (start ;start < swappedName.length ; start++){ //e === e
//     if(swappedName[start] === swappedName[start].toLowerCase()){
//         newName +=swappedName[start].toUpperCase()
//     } else if (swappedName[start] === swappedName[start].toUpperCase()){
//         newName +=swappedName[start].toLowerCase()
//     }

// }
// console.log(newName)

// Assign-07
console.log("-----------------")

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start++; i < mix.length; i++){
    if (typeof mix[i] === 'number'){
        console.log(mix[i])
    }
}