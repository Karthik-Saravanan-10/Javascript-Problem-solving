// Create a object {a: 1, b: 2, c: 3….z: 24} and delete all consonant in that object using for in loop.

const obj={};

for(let i=1;i<=26;i++){
    obj[String.fromCharCode(96+i)]=i*10;
}

for(let i in obj){
    const vowels=['a','e','i','o','u'];
    if (!vowels.includes(i)) {
        delete obj[i]
    }
}

console.log(obj)