const prompt=require("prompt-sync")({sigint:true});
let a=prompt('enter first number','');
    let b=prompt('enter second number','');
    var c=parseInt(a)+parseInt(b);
    console.log('the sum of '+a+' and '+b+' is:' +c);