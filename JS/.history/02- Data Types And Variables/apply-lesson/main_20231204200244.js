
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
*/

//? variable
/*
    js is a losely typed language  
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
  - Variable Scope Drama [Added To Window] ()
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

var name = "mohamed" //declare 
console.log(name)
var name = "salah"  //redeclare
console.log(name)

let  = "mohamed"
