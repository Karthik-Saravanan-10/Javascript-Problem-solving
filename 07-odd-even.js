function reverseOdd(str){
    let string=str;
    let clone=[];
    let toSplit=string.split(" ");
    // console.log(toSplit);

    for(let i of toSplit){
        if((i.length)%2==0){
            clone.push(i);
        }else{
            let kk=i.split("").reverse()
            // console.log(kk.join(""));
            clone.push(kk.join(""));
        }
    } 

    string=clone.join(" ");

    return string
}
let value=reverseOdd("Make sure uoy only esrever sdrow of ddo length");

console.log(value)