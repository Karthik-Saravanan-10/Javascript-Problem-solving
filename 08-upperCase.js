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