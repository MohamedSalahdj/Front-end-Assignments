// let price = 100;
// let discount = false
// let discountAmount = 30;
// let country = "KSA";


// if (discount === true ){
//     price -= discountAmount;
// } else if(country === 'KSA') {
//     price -= 15;
// } else if (country === 'Egypt') {
//     price -= 40;
// } else [
//     price -= 10
// ]

// console.log(price)

// -------------------------------------------------------------------------------------------------
  
/*
  Nested If
*/


let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;

if (discount === true) {

    price -= discountAmount;

} else if (country === "Egypt") {

    if (student === true) { 

        price -= discountAmount + 30;

    } else {

        price -= discountAmount + 10;

    }

} else {

    price -= 10;

}



// -------------------------------------------------------------------------------------------------


/*
  Conditional (Ternary) Operator
*/

let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === 'Female') {
    console.log(`Mrs ${theName}`)
} else {
    console.log(`Mr ${theName}`)
}

// Condition ? If True : If False

theGender === 'Male' ? console.log(`Mr ${theName}`) : console.log(`Mrs ${theName}`)

// Store it in variable
let result = theGender === 'Male' ? 'Mr' : 'Mrs'

document.write(result)


// Nullish Coalescing Operator & Logical Or


console.log(Boolean(100)); // true
console.log(Boolean(-100)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false


console.log("------ nullish coalescing operator -------");


// name = ''
// console.log(`the name ${name || 'New Name'}`)

price = null

console.log(`the product price ${price || "Free"}`)
console.log(`the product price ${price ?? "Free"}`)