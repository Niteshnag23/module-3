const input=require("readline-sync")
let n=input.question("enter the number: ")
let i=1;
let k=1;
let s="";

while(n>=i)
{
    j=1;
    while(k>=j)
    {
        s+="*"
        j++

    }
    s+="\n"
    i++
    k=k+2
}
console.log(s)