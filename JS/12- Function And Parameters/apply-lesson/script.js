// lesson one


// function sayHello(username, age){
//     console.log(`Hello ${username} and age is ${age}`)
// }

// sayHello("Mohamed");

// lesson two
function sayHello(userName, age) {
    if (age < 20) {
      console.log(`App is Not Suitable For You`);
    } else {
      console.log(`Hello ${userName} Your Age is ${age}`);
    }
}  
sayHello("Mohamed Salah", 25)

function generateYear(start, end, exclude){
    for(let i = start; i <= end; i++){
        if(i === exclude){
            continue
        }
        console.log(`${i}`)
    }
}


generateYear(1999, 2024, 2023)

console.log("=========================")
// lesson three
function calc(num1, num2){
    return num1 + num2
}


let result = calc(18, 6);

console.log(result)

function Interrupting(){
    for(let j = 0; j < 15; j++){
        if (j === 13){
            return 
        }
        console.log(j)
    }
}

InterruptingFunctionResult = Interrupting()
console.log(InterruptingFunctionResult)

console.log("=========================")

// default first solution 

function info(username, age, skills){
    if (age === undefined ){
        age = "Unknown"
    }
    if (skills === undefined ){
        skills = "Without skills"
    }
    console.log(`your name is ${username} - age is ${age} - and your skills ${skills}`)
}
info("Mohamed")


// default second solution 

function info(username, age, skills){
    age = age || "Unknown"
    skills = skills || "Without skills"
    console.log(`your name is ${username} - age is ${age} - and your skills ${skills}`)
}

info("Mohamed", 25)


// default Third solution 

function info(username="Unknown", age="Unknown", skills="Without skills"){

    console.log(`your name is ${username} - age is ${age} - and your skills ${skills}`);
}
info("Mohamed", 25, ["Python", "Django", "JS", "Git", "GitHub"])

