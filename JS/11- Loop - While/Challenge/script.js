/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

document.write(`<div>We Have ${myAdmins.indexOf("Stop")} Admins</div>`);
document.write(`<hr>`);
let empNumber = 1;
for (let i= 0 ; i < myAdmins.indexOf("Stop"); i++){
    empNumber = 1
    document.write(`<div> 
       the Admin For Team ${i+1} Is ${myAdmins[i]}
    `)
    document.write(`<h3>Team Member: </h3>`)
    for(let j = 0; j < myEmployees.length; j++){
        if (myAdmins[i][0] === myEmployees[j][0]){
            document.write(`<p> - ${empNumber} ${myEmployees[j]}</p>`);
            empNumber++;
        }
    }
    document.write(`</div>`);
    document.write(`<hr>`);
}

