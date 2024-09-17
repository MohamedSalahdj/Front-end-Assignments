

### Variables 

- The `var` keyword was used in all JavaScript code from 1995 to 2015.
- The `let` and `const` keywords were added to JavaScript in 2015.
- The `var` keyword should only be used in code written for older browsers.

#### Explain Different:

```js
const price1 = 5;
const price2 = 6;
let total = price1 + price2;

// The two variables price1 and price2 are declared with the const keyword.
// These are constant values and cannot be changed.
// The variable total is declared with the let keyword.
// The value total can be changed.

```

#### When to Use var, let, or const?

1. Always declare variables
2. Always use `const` if the value should not be changed
3. Always use `const` if the type should not be changed (Arrays and Objects)
4. Only use `let` if you can't use `const`
5. Only use `var` if you MUST support old browsers.

------

### Let 

#### Block Scope

Before ES6 (2015), JavaScript did not have **Block Scope**.

JavaScript had **Global Scope** and **Function Scope**.

ES6 introduced the two new JavaScript keywords: `let` and `const`.

These two keywords provided **Block Scope** in JavaScript:

```js
{
  let x = 2;
}
// x can NOT be used here


```

#### Global Scope

Variables declared with the `var` always have **Global Scope**.

Variables declared with the `var` keyword can NOT have block scope:

```js
{
  var x = 2;
}
// x CAN be used here
```

#### Cannot be Redeclared

Variables defined with `let` **can not** be redeclared.

You can not accidentally redeclare a variable declared with `let`.

```js
let x = "John Doe";

let x = 0;

// Variables defined with var can be redeclared.

var x = "John Doe";

var x = 0;
```

#### Redeclaring Variables

Redeclaring a variable using the `var` keyword `can impose problems.`

Redeclaring a variable inside a block will also redeclare the variable outside the block:

```js
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
```

```js
// Redeclaring a variable using the let keyword can solve this problem.

// Redeclaring a variable inside a block will not redeclare the variable outside the block:

let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10
```

## Let Hoisting

Variables defined with `var` are **hoisted** to the top and can be initialized at any time.

Meaning: You can use the variable before it is declared:



Variables defined with `let` are also hoisted to the top of the block, but not initialized.

Meaning: Using a `let` variable before it is declared will result in a `ReferenceError`:

---------

### JS Const 

The `const` keyword was introduced in [ES6 (2015)](https://www.w3schools.com/js/js_es6.asp)

Variables defined with `const` cannot be **Redeclared**

Variables defined with `const` cannot be **Reassigned**

Variables defined with `const` have **Block Scope**



```js
JavaScript const variables must be assigned a value when they are declared:

// correct
const PI = 3.14159265359;

// Incorrect

const PI;
PI = 3.14159265359;

```

## When to use JavaScript const?

**Always declare a variable with `const` when you know that the value should not be changed.**

Use `const` when you declare:

- A new Array
- A new Object
- A new Function
- A new RegExp

## Constant Objects and Arrays

The keyword `const` is `a little misleading.`

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

- Reassign a constant value
- Reassign a constant array
- Reassign a constant object

​	But you CAN:

- Change the elements of constant array
- Change the properties of constant object

```js
//Constant Array

// create a constant array 
const cars = ["BMW", "sab", "Volvo"]

// you can change an element
cars[0] = "Toyota"

// you can add an element 

cars.push("Audi")

//But you can NOT reassign the array:
cars = ['Audi', "Toyota"]
```



```js
// Constant Objects

const car = {
    type: "Audi",
    model: "500",
    color: "red" 
}

// change a property
car.color = "Black"

// add new property
car.owner = "Mohamed"

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
```

