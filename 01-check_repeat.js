let str = "geeksforgeeks";
let char;
for (let i = 0; i < str.length; i++) {
    let isRepeat = false;
    for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
            isRepeat = true;
            break;
        }
    }
    if(!isRepeat){
        char=str[i];
        break;
    }
}
console.log("Non-Repeating Character", char)