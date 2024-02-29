const input=require("readline-sync")
let a=Number(input.question("enter the value:")),b=a
let s=0;
//let answer=Math.floor(a);
while(a>0)
{
    t=a%10
    a= Math.floor(a/10)
    s=(s*10)+t
}
if (s==b)
{
    console.log("palindram number")
}
else 
{
    console.log("Not-palindram number")
}


    
      

