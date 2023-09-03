const prompt=require("prompt-sync")({sigint:true});
const str=prompt('enter a string');
function reverseStr(str){
    let output=' '
    for(let i=str.length-1;i>=0;i--){
        output=output+str[i]
    }
    return output
}
console.log(reverseStr(str))