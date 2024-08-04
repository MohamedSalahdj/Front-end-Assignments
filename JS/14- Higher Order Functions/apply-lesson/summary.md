<!-- Lesson-01 -->
/*
    Higher Order Functions – Map
    ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

<!-- Lesson-02 -->

/*
        Higher Order Functions – Map Practice
            Map
                - Swap Cases
                - Inverted Numbers
                - Ignore Boolean Value
*/

<!-- Lesson-03 -->
/*
    Higher Order Functions – Filter
    - Filter
        --- method creates a new array
        --- with all elements that pass the test implemented by the provided function.

        Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
            - Element => The current element being processed in the array.
            - Index => The index of the current element being processed in the array.
            - Array => The Current Array
    
*/

<!-- Lesson-04 -->

/*
  Filter
  - Filter Longest Word By Number
*/


<!-- Lesson-05 -->
/*
  - Reduce
    --- method executes a reducer function on each element of the array,
    --- resulting in a single output value.

  Syntax
    reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
        - Accumulator => the accumulated value previously returned in the last invocation
        - Current Val => The current element being processed in the array
        - Index => The index of the current element being processed in the array.
        ---------- Starts from index 0 if an initialValue is provided.
        ---------- Otherwise, it starts from index 1.
        - Array => The Current Array
*/

<!-- Lesson-06 -->
/*
    Reduce
    - Longest Word
    - Remove Characters + Use Reduce
*/


<!-- Lesson-07 -->

/*
  Higher Order Functions – ForEach And Practice
    - forEach
    --- method executes a provided function once for each array element.

    Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
      - Element => The current element being processed in the array.
      - Index => The index of the current element being processed in the array.
      - Array - The Current Array

    Note
      - Doesnt Return Anything [Undefined]
      - Break Will Not Break The Loop
*/ 