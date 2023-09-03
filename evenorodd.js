const prompt=require("prompt-sync")({sigint:true});
let number=prompt('enter a number');
    let remainder=(number%2);
    if (remainder==0){
        console.log('the ${number} is even');
        }
        else{
            console.log('the ${number} is odd');
        }