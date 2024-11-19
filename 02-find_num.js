// Find the Missing Number in an Array	
// Input: [1, 2, 4, 6, 3, 7, 8]
// Output: 5

const arr=[1, 2, 4, 6, 3, 7, 8];
let missValue;
arr.sort((a,b)=>{
    return a-b;
});
for(let i=0;i<arr.length;i++){
    if((arr[i+1]-arr[i])>1){
        missValue=arr[i]+1;
    }
}

console.log("Missing Number",missValue);



// for(let i=0;i<arr.length;i++){
//     if(!((i+1)==arr[i])){
//         console.log(i+1);
//         break
//     }
// }