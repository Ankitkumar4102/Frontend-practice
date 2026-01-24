// 1. Setup readline-sync:
const readlineSync = require("readline-sync");

// Ask for user input:
const userName = readlineSync.question("Mat I know your name? ");
console.log(`Welcome, ${userName}!`);

// Convert and use numeric Input:
const userAge = readlineSync.question('May I know your age? ');
const userAgeNumber = Number(userAge);

// Check if conversion was successful:
if(!isNaN(userAgeNumber)) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - userAgeNumber;
    console.log(`You were born in the year ${birthYear}.`);

}else{
    console.log(`Please enter a valid number of age`);
}