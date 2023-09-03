const prompt=require("prompt-sync")({sigint:true});
var number=parseInt(prompt('please enter a positive number'));
    
    if (number<0){
        console.log("error:No negative nos");

    } if(number==0){
        console.log('the factorial of ${number} is 1.');

    }if (number>0){
        let fact=1;
        for(i=1;i<=number;i++){
            fact *=i;
        }
    console.log("the factorial of "+number+ "is" +fact);
    }