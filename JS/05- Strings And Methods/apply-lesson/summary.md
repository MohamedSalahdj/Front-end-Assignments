String Method Part -01 
/*
  String Methods
  - Access With Index []
  - Access With charAt() :- like at []
  - length 
  - trim() :- remove space in beggining and ending 
  - toUpperCase()
  - toLowerCase()
  - Chain Methods :- do more than one method in one line 
*/
let theName = "  Ahmed  ";

console.log(theName);
console.log(theName[1]);
console.log(theName[5]);

console.log(theName.charAt(1));
console.log(theName.charAt(5));

console.log(theName.length);
console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toUpperCase());


String Method Part -02
/*
String Methods
  - indexOf(Value [Mand], Start [Opt] 0) --> return start point of string 
  - lastIndexOf(Value [Mand], Start [Opt] Length) --> return start of string from last
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]   --> repeat the string
  - split(Separator [Opt], Limit [Opt]) --> return as array

*/

String Method Part -03
/*
String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
    --- Start > End Will Swap : put lower in the start
    --- Start < 0 It Start From 0
    --- Use Length To Get Last Character

  - substr(Start [Mand], Characters To Extract)
    --- Start >= Length = "" get string fady
    --- Negative Start From End

  - includes(Value [Mand], Start [Opt] Default 0) [ES6] ---> output (true, Or false)
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6] ---> output (true, Or false)
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]  ---> output (true, Or false)
*/


