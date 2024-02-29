const input=require("readline-sync")
let a=input.question("enter the number:");
let b=input.question("enter the number")
let c=input.question("enter the number")
let d=input.question("enter the number")

if(a>b){
    if(a>c){
        if(a>d){
            console.log(a);
        }else console.log(d);
    }else if(c>d){
        console.log(c);
    }else console.log(d);
}else if(b>c){
    if(b>d){
        console.log(b);
    }else console.log(d);
}else if(c>d){
    console.log(c);
}else console.log(d);
