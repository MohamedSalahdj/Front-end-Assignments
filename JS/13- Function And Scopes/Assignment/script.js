// Assign-01
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
      // Write Your Code Here
      // Osama Mohamed => Osama M.
      // Ahmed ali => Ahmed A.
      let fullName = zName.split(" ");
      return `${fullName[0]} ${fullName[1][0]}.`
    }
    function ageWithMessage(zAge) {
      // Write Your Code Here
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
      let age = zAge.split(" ")[0];
      return `Your Age Is ${age}`
    }
    function countryTwoLetters(zCountry) {
      // Write Your Code Here
      // Egypt => You Live In EG
      // Syria => You Live In SY
      return `${zCountry[0].toUpperCase()}${zCountry[1].toUpperCase()}`
    }
    function fullDetails() {
      // Write Your Code Here
      return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`
    }
    return fullDetails(); // Do Not Edit This
}
  
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// Assign-02
console.log("========== Assign-02 =============")
// function itsMe() {
//     return `Iam A Normal Function`;
//   }
  
// console.log(itsMe()); // Iam A Normal Function

let itsMe = _ => `Iam A Normal Function`

console.log(itsMe())


// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
// }
  
// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org"))


// Assign-03
console.log("========== Assign-03 =============")

function checker(zName) {
    return function (status) {
      return function (salary) {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
      };
    };
  }

let checkerTwo = (zName) => (status) => (salary) => {
   return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

console.log("==========  =============")
console.log(checkerTwo("Osama")("Available")(4000))
console.log(checkerTwo("Ahmed")("Not Available")())


// Assign-04
console.log("========== Assign-04 =============")



function specialMix(...data) {
    let sum = 0 
    for (let i =0; i < data.length; i++){
        parseInt(data[i]) ? sum += parseInt(data[i]) :  sum += 0
    }
    return sum || "All Is Strings"
}
  
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
