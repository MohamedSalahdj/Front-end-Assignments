/*
 ?Arithmetic Operators
    + Addition
    - Subtraction
    * Multiplication
    / Division
    ** Exponentiation (ES7)
    % Modulus (Division Remainder)
    ++ Increment [ Post / Pre ]
    -- Decrement [ Post / Pre ]

*/
// x = 5
// y = 2

// console.log(x+y)

// console.log(10+"Ahmed") 
// console.log(typeof 10-"Ahmed" ) //? NAN
// console.log(typeof NaN)  //! number


console.log(10+"10")
console.log(10+"10"+1)

// console.log(x++) //? print then increment
// console.log(x)   //? 

// console.log(--y) //! decrement then print


/*
    ? Unary Plus And Negation Operators
  
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true

  ! If the operand is not a valid numeric string, it returns NaN (Not-a-Number).
*/


// let x = 45
// console.log(x)
// console.log(+x)

x = "-555" 
x = +x
// console.log(x)
// console.log(typeof x) //number
// console.log(+"Osama"); // NaN
// console.log(+"15.5");
// console.log(+0xff);

// console.log(+null); // 0
// console.log(+false); // 0
// console.log(+true); //1

// console.log("-------------------");

// console.log(-100);            //-100
// console.log(-"100");         //-100
// console.log(-"-100");       //100
// console.log(-"Osama");     //NAN
// console.log(-"15.5");     //-15.5
// console.log(-0xff);      //-255
// console.log(-null);     //-0
// console.log(-false);   //-0
// console.log(-true);   //-1


/*
  !Type Coercion (Type Casting)
    Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another
  - +
  - -
  - "" - 2
  - false - true


!The Equality Operator
The equality operator (==) can be used to compare 'values' irrespective of their type.
 This is done by coercing a non-number data type to a number
*/



let a = "100";
let b = 20;
let c = true;

// console.log(true + '10') //true10
// console.log(a+b+c); //10020true


/*
  !Assignment Operators
*/

a = 10;

a = a + 20;

a = a + 70;

a += 100; // a = a + 100

a -= 50; // a = a - 50

a /= 50; // a = a / 50

