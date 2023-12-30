/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

// console.log(-b)
// console.log(typeof b)

console.log(++a + +b++ + +c++ - +a++); // 11 + 20 + 80 - 11  ==> 100

/*
  [++a] [+]
  [++a]
  - Value: 11
  - Explain: pre increment [ increase first]
  [+] 
  - Explain: addition 
  
  [+b++]  [+]
  [+] : unary operator 
  [b++]
  -value : 20
  - Explain : post increment
  [+]
  -explain : addition

  [+c++] [-]
  [+]
  Explain : unary operator
  [c++]
  value : 80 
  Explain : post increment
  [-]
  Explain : astraction

  [+a++]
  [+]
  Explain : prefix
  [a++]
  value : 11
  Explain : post increment
*/


/*
  a = 12
  b = 21 
  c = 81
 */
console.log(++a + -b + +c++ - -a++ + +a); // 13 + -21 + 81 - -13 + 14 : 71
console.log('hello',13 + -21 + 81 - -13 + 14)
/*
  a = 14
  b = 21
  c = 82 
 */

  /*
  [++a] [+]
  [++a]
  - Value: 13 
  - Explain: pre increment
  [+] 
  - Explain:  addition
  
  [-b]  [+]
  [-] : unary negation
  [b]
  -value : -21
  - Explain : unary negation
  [+]
  -explain : addtion

  [+c++] [-]
  [+] :
  Explain : unary operator
  [c++]
  value : 81 
  Explain : post increment
  [-]
  Explain : astraction

  [-a++] [+]
  [-]
  Explain : unary negation
  [a++]
  value : -13
  Explain : post increment
  [+]
  Explain : addtion

  [+a]
  [+]
  Explain: unary operator
  [a] 
  value : 1400
*/


console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1
// console.log(81 + 21 + 13 * 21 - 22 * 13 + 12 - 1)



/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * e + f%g); // 2000
console.log(-d + ++e * ++g + ++f); // 173