<!-- Lesson-01 -->
/*
  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/

<!-- Lesson-02 -->
/*
  Function Advanced Examples
  !! if you put number of parameter > number of arguments and try to print parameter will print undifined
*/

<!-- Lesson-03 -->
/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed] --> if you add line bellow return and return without value
  - Interrupting
  
*/

<!-- Lesson-04 -->
/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

<!-- Lesson-05 -->
/*
  Function
  - Rest Parameters --> make function to accept any number of arguments 
  - Only One Allowed 
  - Must Be Last Element
*/

function calc(...numbers) { // ...numbers ---> array of arguments
  // console.log(Array.isArray(numbers));
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]; // result = result + numbers[i]
  }
  return `Final Result Is ${result}`;
}

<!-- Lesson-06 -->
/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/
function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${us}</h2>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }
  document.write(`</div>`);
}

showInfo("Osama", 38, 20, "No", "Html", "CSS");