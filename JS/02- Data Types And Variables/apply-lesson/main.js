
//? Data Types 
/*

    typeof --> get type of data 
        syntax typeof "mohamed"   || typeof("mohamed")

    
    - string "mohamed"
    
    - number  122, 12.5 
    
    - array => object [12,35,5,-5] , ["ahmed", "saad"]

    - object 
                {
                    key : value ,
                    key : value ,
                    ......
                }
    - boolean  : true , false 

    - undefined 

    - null

    - NAN
*/

//? variable
/*
<<<<<<< HEAD
    js is a losely typed language  :
      variables do not require explicit declaration of their data type when they are created. 
=======
    js is a losely typed language (or dynamically typed)   
    that you don't need to declare the data types of variables explicitly. The type of a variable is determined at runtime,
    allowing for more flexibility but also increasing the potential for runtime errors.

    1- Variable Types Change: Variables can hold values of any type and can change types over time.
            let x = 10;      // x is a number
            x = "hello";     // now x is a string
            x = true;        // now x is a boolean
    2- Type Inference: The interpreter infers the type of the variable based on the assigned value.
          let message = "Hello, World!";  // message is a string

      3- 
>>>>>>> 2f3c412509d9217e7c134eb1c341ae60937e7c40
    syntax 
        var variable_name =  variable_value 


    Identifiers
        name convention and rules 
        reserved word

    - can start with _ or $ 
    - js is case sensitive  
    - the best way to make name to variable ==> camelCase
*/

//? var , let , const 

/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window object] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/

// console.log(y)
// var y = 1254
// var abbabbabba = 1; //declare 
// var name = "salah"  //redeclare
// console.log(name)

// console.log(x)
// let x = "mohamed"
// let x = "two" --> ont support 


//! String
/*
    String Syntax + Character Escape Sequences
    \ Escape + Line Continue
    \n


    //? Concatenation 
    + 

    Template literals (template strings)
    
    `` pactec

*/

console.log("Elzero \\Web \"School\" ")
console.log("Elzero \nWeb \"School\" ")

let firstName = "Mohamed"
let lastName = "Salah"

console.log(firstName + " " + lastName)

let a = "we love"
let b = "javascript"
let c = "And"
let d = "Programming"

console.log(a + "\"\" " + b + 
"\n" + c + " " + d)

//! after EC6


console.log(`${a} "" '' \\ ${b}
${c} ${d}`)

/*
let title = "Elzero";
let desc = "Elzero Web School";

let markup = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;

*/
