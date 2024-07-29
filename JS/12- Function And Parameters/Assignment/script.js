console.log("====================Assign-01=======================")
// Assign-01

function sayHello(theName, theGender) {
    theGender === "Male" ? console.log(`Hello Mr ${theName}`):
    theGender === "Female" ? console.log(`Hello Mis ${theName}`):
    console.log(`Hello ${theName}`)
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log("====================Assign-02=======================")
// Assign-02

function calculate(firstNum, secondNum, operation='add') {
    if (secondNum === undefined){
        console.log("Second Number Not Found");
        return;
    }
    if (operation == 'add'){
        console.log(firstNum+secondNum);
    } else if (operation == 'subtract'){
        console.log(firstNum-secondNum);
    } else if (operation == 'multiply'){
        console.log(firstNum*secondNum);
    }
}
  
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

console.log("====================Assign-03=======================")
// Assign-03

function ageInTime(theAge) {
    if (theAge > 10 && theAge < 100){
        console.log(`${theAge*12} Months`)
        console.log(`${theAge*52.14} Weeks`)
        console.log(`${theAge*12*365.25} Days`)
        console.log(`${theAge*12*365*24} Hours`)
        console.log(`${theAge*12*365*24*60} Minutes`)
        console.log(`${theAge*12*365*24*60*60} Minutes`)
        return 
    }
    console.log("Age Out Of Range")
}
  
// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months


console.log("====================Assign-04=======================")
// Assign-04

function checkStatus(...userData) {
    let name, age, status;
    for (let i = 0 ; i < userData.length; i++){
        typeof userData[i] === 'string' ? name = userData[i]:
        typeof userData[i] === 'number' ? age = userData[i] :
        typeof userData[i] === 'boolean' ? status = userData[i] :
        console.log("Unkown")
    }
    if (status){
        console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`)
        return
    }
    console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`)

}


checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


console.log("======================Assign-05=====================")
// Assign-05

function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for (let i = startYear; i <= endYear; i++){
        document.write(`<option value="${i}">${i}</option>`)
    }
    document.write(`</select>`)
  }
createSelectBox(2000, 2021);


console.log("======================Assign-06=====================")
// Assign-06

function multiply(...numbers){
    let result = 1;
    for (let i = 0; i < numbers.length; i++){
        if (typeof numbers[i] == 'string'){
            continue;
        }
        result *= parseInt(numbers[i]);
    }
    return result;
}

console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000