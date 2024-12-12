// Remove the duplicates from the array [1,2,3,4,5,3,3,3,3,1,1,3,4,1]

const arr=[1,2,3,4,5,3,3,3,3,1,1,3,4,1];

const originalArr=Array.from(new Set(arr));

console.log(originalArr)