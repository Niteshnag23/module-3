const input=require("readline-sync")
let n=input.question("enter the value: ")
let i=1;
let s=""
let p=2;

while(n>=i)
{
    while(i==1)
    {
        s+="*"
        i++
        s+="\n"
    }
       
    while(i<=n-1)
    {        j=1
        while(p>=j)
        {
            s+="*"
            j++
            
        }
            i++
            s+="\n"
    }
    while(i==n)
    {
        s+="*"
        s+="\n"
        i++
    }
}
console.log(s)   