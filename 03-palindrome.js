// Check if a String is a Palindrome
// Input: "racecar"
// Output: true

let str = "racecar";
let strArray = str.split("");
const reverseArray = str.split("").reverse();
const reverseStr = reverseArray.join("");

if(str===reverseStr){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");
}