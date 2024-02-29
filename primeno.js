const input=require("readline-sync");
let n=input.question("enter the number");
let i=2;
let s=0;
while(n>i)
{
   if(n%i!=0)
   {
    i=i+1;
   }
    else 
    {
        s=s+1;
        i=i+1;
    }
    }
      if (s!=0)
      {
        console.log("Not Prime Number");
      }
    else
      {
        console.log("Prime Number");
      }
