const prompt=require("prompt-sync")({sigint:true});
var string=prompt("please enter a string");
var len=string.length;
var msg='It is a palindrome';
for(var i=0;i<len/2;i++){
    if(string[i] !=string[len - 1 - i]){
        msg='It is not a palindrome';
    }
}
console.log('${string}: ${msg}');