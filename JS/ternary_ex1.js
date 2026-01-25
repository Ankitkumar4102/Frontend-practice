const totalMarksScored = 20;

if(totalMarksScored < 50){
    console.log("You need to work hard.");
} else {
    console.log("You cleard the exam great!!!!");
}


//Use ternary operators

// Syntax condition ? yes : no

(totalMarksScored < 40) ? console.log("You need to work hard") : console.log("You cleared the exam great!!!")
// other way
const result = totalMarksScored < 30 ? "You need to work hard" : "You cleard the exam great!!!"
console.log(result);
