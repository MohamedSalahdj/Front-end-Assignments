/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/


function showDetails(...userData) {
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


showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"