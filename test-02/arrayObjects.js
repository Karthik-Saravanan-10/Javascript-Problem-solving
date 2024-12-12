// Create a array of objects example [{a:10}, {b:20}, ….. {z: 240}] and filter out the objects where key is in vowels output should be       [{a: 10}, {e: 50}, {i: 90}…]

const arr=[];

for(let i=1;i<=26;i++){
    let data={};
    data[String.fromCharCode(96+i)]=i*10;
    arr.push(data);
}

let result=arr.filter((element)=>{
    const vowels=['a','e','i','o','u'];
    return vowels.includes(Object.keys(element)[0])
})

console.log("result",result)