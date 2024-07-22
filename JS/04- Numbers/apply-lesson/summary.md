/*
  
  Number
  - Double Precision
  - Syntactic Sugar "_" : compiler igonre _ betweennumber
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
  
*/



/*
  Number Methods
  - Two Dots To Call A Methods
  - toString() :- Convert Number To String
  - toFixed()  :- to ruturn some digit after . and convert to string 
  - parseInt() :- Convert To integer but analysis to connvert only digit 
            parseInt("-10")  -> -10
            parseInt("-10.33")  -> -10
            parseInt("10")  -> 10 
            parseInt("10.33")  -> 10  
            parseInt("10 6")  ->   10
            parseInt("10 years")  -> 10   
            parseInt("years 10"); -> NaN
  - parseFloat() :- convert to float number 
  - isInteger() [ES6] :- 
  - isNaN() [ES6]  :- not understand it 

  console.log((100).toString());
  console.log(100.10.toString());

  console.log(100.554555.toFixed(2));

  console.log(Number("100 Osama"));
  console.log(+"100 Osama");
  console.log(parseInt("100 Osama"));
  console.log(parseInt("Osama 100 Osama"));
  console.log(parseInt("100.500 Osama"));
  console.log(parseFloat("100.500 Osama"));

  console.log(Number.isInteger("100"));
  console.log(Number.isInteger(100.500));
  console.log(Number.isInteger(100));

  console.log(Number.isNaN("Osama" / 20));

*/


/*
  Math Object
  - round()  :- approximation it to the lower if lower than 5
  - ceil()   :- approximation it to the larger  (( rounded up ))
  - floor()  :- approximation it to the lower  !important (( rounded down ))
  - min()    :- get minimum 
  - max()    :- get maximum 
  - pow()    :- get power of value
  - random() :- 
  - trunc() [Es6]  :- return integer part !important
*/


<!-- test -->

/*

let x = 0.2 + 0.1; Floating point arithmetic is not always 100% accurate:

To solve the problem above, it helps to multiply and divide:
  let x = (0.2 * 10 + 0.1 * 10) / 10;


--------------------------------------------------
NaN is a JavaScript reserved word indicating that a number is not a legal number.
--------------------------------------------------
Infinity : Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

---------------------------------------------------
By default, JavaScript displays numbers as base 10 decimals.

But you can use the toString() method to output numbers from base 2 to base 36.

Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.

*/
