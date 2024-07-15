let isMarried 

// Difference between Null Vs undefined

// alert("Welcome")


// Typeof 


console.log(typeof null)
console.log(typeof NaN)
console.log(typeof 11)
console.log(typeof '11')
console.log(typeof 3.3)
console.log(typeof true)


// Convert Type

// Number To convert to number || String To convert to String


console.log(typeof '6'/3)
console.log(typeof '6'/'3')
console.log(typeof 6/'3')




// In all operation if can convert it to number will convert it Without Summation


console.log('6' + '3') //63
console.log(6 + '3') //63
console.log('6' - 2 + '3') //43


// Flase --> 0 , ''
console.log(Boolean(''))


// Condition 

let age = 24.5

if (age > 25 ){
    console.log("greater than me")
} else if (age > 24){
    console.log("You are greater than Ziad")   
}else {
    console.log("I am greater than you")
}

// Ternary Operator  
let isAllowed = (age > 25)  ? true : false

console.log(isAllowed)


// AND &&  -- OR ||



// Looping

// 1- While

let i = 1

while(i <= 5){
    console.log(i)
    i++;
}

// 2- Do while --> Execute minimum one iteration Then show Condition
console.log("--------************---------")
let j = 5
do {
    console.log(j) // 5
    j--;
} while(j>3)

console.log("-----")
// 3- For Loop 
for (let i =0; i < 10 ; i++){
    console.log(i)
}

// For i in range(10)
console.log("--------************---------")
for (let i = 1; i <=10; i++){
    for(let j = i; j<=10 ; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
    console.log(`ending table ${i}`)
}


// Function

