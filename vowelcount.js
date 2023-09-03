const prompt=require("prompt-sync")({sigint:true});
var string=prompt("enter a string");
const reg=/[aeiou]/gi;
var chars=string.match(reg);
console.log(chars.join(','));
console.log(chars.length);