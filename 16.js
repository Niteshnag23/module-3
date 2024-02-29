const input=require("readline-sync")
let n=input.question("enter the value: ")
let a=1;
let i=3;

while(n>i)
{    p=2
    s=0
    while(i>p)
    {
        if(i%p!=0)
        {
            p++
        }
        else
        {
            s++
            p++
        }
        
      
    }
    if(s==0)
    {
        a++
        i++
    }
    else
    {
        i++
    }
}
console.log(a)