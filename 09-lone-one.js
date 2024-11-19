// Create a function which counts how many lone 1s appear in a given number. 
//Lone means the number doesn't appear twice or more in a row.
// 	countLoneOnes(101) ➞ 2
// countLoneOnes(1191) ➞ 1
// countLoneOnes(1111) ➞ 0
// countLoneOnes(462) ➞ 0

function countLoneOnes(val){
    let value=val.toString();
    let arr_value=value.split("");
    let count=0;

    for(let i=0;i<arr_value.length;i++){
        if(i<=arr_value.length-1 && arr_value[i]=="1"){
            if(!(arr_value[i]==arr_value[i+1])&&!(arr_value[i-1]==arr_value[i])){
                count++;
                // console.log("hh",i)
            }
        }
    }
    // console.log(val)

    console.log("lone one's count -",count)
}

countLoneOnes(46201);