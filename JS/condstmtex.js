const firstString = "apple";
const secondString = "mango";
const thirdString = "watermelon"

const lengthOfFirstStr = firstString.length;
const lengthOfSecondStr = secondString.length;
const lengthOfThirdStr = thirdString.length;

if(lengthOfFirstStr < lengthOfSecondStr && lengthOfFirstStr < lengthOfThirdStr){
    console.log(`${firstString} is the smallest string`);
} else if(lengthOfSecondStr < lengthOfFirstStr && lengthOfSecondStr < lengthOfThirdStr){
    console.log(`${secondString} is the smallest string`);
} else if(lengthOfThirdStr < lengthOfFirstStr && lengthOfThirdStr < lengthOfSecondStr){
    console.log(`${thirdString} is the smallest string`);
} else{
    console.log("Found two or more string of the same length");
}