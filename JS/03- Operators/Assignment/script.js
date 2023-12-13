// Replace ? With Arithmetic Operators
console.log(10 * 20 * 15 % 3 * 190 * 10 * 400); // 0

console.log("-------------------------");


// task-02
let num = 3;

// Solution One
console.log(num+num); // 6

// Solution Two
console.log(num+num+false); // 6

// Soultion Three
console.log(num+num+true-true); // 6

// Soultion Four
console.log(num*num-num); // 6

// Solution Five
console.log((num**num)/3 - num); // 6

// Solution Six
console.log(num * --num); // 6


console.log("-------------------------");

let num2 = "10";

// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log(num2*num2/num2 + +num2); // 20

// Solution Three
console.log(num2 * --num2 / num2 + ++num2); // 20

// Solution Four
console.log(num2 * num2 % ++num2 + --num2 + --num2 ); // 20

console.log("-------------------------");

let points = 10;

points = ++points + points + points - --points - points

console.log(points); // 13

points--;
points--;
points--;
points--;
points--;
console.log(points); // 8;