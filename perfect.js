const input=require("readline-sync")
let n=input.question("enter the number: ")
i=1
s=0
while(n>i)
{
    if(n%i==0)
    {
        s=s+i
    }
    i++
}
if(n==s)
{
    console.log("Perfect Number");
}
else 
{
    console.log("Not Perfect Number");
}