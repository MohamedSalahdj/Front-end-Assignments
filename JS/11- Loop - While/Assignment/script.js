let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let number = counter
// Output
"1 => Sayed"
"2 => Mahmoud"


while(counter < friends.length){
    if (typeof friends[counter] === 'string' && friends[counter][index] !== 'A'){
        console.log(` ${++number}=> ${friends[counter]}`)
    }
    counter++;
}