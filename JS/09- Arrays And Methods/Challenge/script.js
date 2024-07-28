/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my.length = counter + 1

console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero,  counter)); // ["Elham", "Mazero"]

console.log(`El${my[--counter].slice(counter)}`); // "Elzero"

console.log(`${my[counter][counter+counter]}${my[counter][counter+counter+zero].toUpperCase()}`); // "rO"