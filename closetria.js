const input=require("readline-sync")
let n=input.question("enter the value: ")
let i=0;
let s=" "
while(n>=i)
{
    j=1;
    while(j<=i)
    {
        s += ("*")
        j++
    }
        s += ("\n")
        i++
}
console.log(s);