// lesson one
/*
    - can use it before declar it 
    - anonymous function --> excute in run time
    - 
    -  
*/

console.log(calc(12, 45))
function calc(num1, num2){
    return num1 + num2
}



let calculator = function (nu1, nu2){
    return nu1 + nu2
}


console.log(calculator(10, 50))

setTimeout(function () {
   console.log("After 2 second") 
}, 2000);


document.getElementById("show").onclick = function() {
    console.log("Hello From Tich")
}

// lesson two

console.log("------ lesson two -------")

function sayHello(fName, lName) {
    let messgae = `Hello`
    function allMessage(){
        function concatName() {
            return `${fName} ${lName}`
        }
        return `${messgae} ${concatName()}`
    }
    return allMessage()
}

console.log(sayHello("Mohamed", "Sayed"))


// lesson Three

console.log("------ lesson Three -------")

function helloName(name) {
    let message = `Hello`
    return `${message} ${name}`

}

console.log(helloName("Mohamed Samy"))

let message = function (name) {
    let message = `Hello`
    return `${message} ${name}` 
}

console.log(message("Mohamed Saad"))


// let messageArrow = () => {
//     return "Hello"
// }

// let messageArrow = () => "Hello"

let messageArrow = _ => "Hello"

console.log(messageArrow())


let printOneNumber = num1 => num1

console.log(printOneNumber(15))

let printTwoNumber = (num1, num2) => num1 + num2

console.log(printTwoNumber(15, 16))

// lesson Four

console.log("------ lesson Four -------")


var a = 1;

let b = 2;


// console.log(`From Global ${a}`)
// console.log(`From Global ${b}`)

function showText() {
    var a = 15;
    let b = 15
    console.log(`function - From Local ${a}`)
    console.log(`function - From Local ${b}`)

}


console.log(`From Global ${a}`)
console.log(`From Global ${b}`)


showText()


// lesson Seven

console.log("------ lesson Seven -------")

let x = 10;

if (x === 10) {
    x = 20;
}


console.log(x)