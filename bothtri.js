const input=require("readline-sync")
let n=input.question("enter the value: ")
let i=1;
let p=1;

let s=""
m=n+(n-1);
while(n>=i)
{
    j=1;
    while(p>=j)
    {
        s+="*"
        j++
    }
    s+="\n"
    i++
    p=p+2
}
    p=p-4;
    while(m>=i)
    {
        j=1;
    while(p>=j)
    {
        s+="*"
        j++

    }
        i++
        s+="\n"
        p=p-2
    }
console.log(s)