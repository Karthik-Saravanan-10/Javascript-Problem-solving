const arr=[3, 2, 1, 5, 6, 4];
let k=2;
arr.sort((a,b)=>{
    return b-a
});

console.log(`${k}th Largest Number is - ${arr[k-1]}`);