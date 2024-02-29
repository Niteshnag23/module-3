// 1st max of three numbers
const input = require("readline-sync");
let  a = input.question("enter fire number:");
let b = input.question("enter fire number:");
let c = input.question("enter fire number:");
if(a>b)
{
    if(a>c)
    {
        console.log(a);
    }
    else 
    {
        console.log(c);
    }
}
else if(a<b)
{
    if(b>c)
    {
        console.log(b);
    }
    else 
    {
        console.log(c);
    }
}