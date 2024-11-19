// Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.	
// 	Ex: insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"

function insertWhitespace(str){
    let string=str;
    let char=[];
    for(let i=0;i<string.length;i++){
        if((i>0)&&(string[i]==string[i].toUpperCase())){
            char.push(" "+string[i])
        }else{
            char.push(string[i]);
        }
    }

    console.log(char.join(""));
}

insertWhitespace("TheGreatestUpsetInHistory");