const input=require("readline-sync")
let n=input.question("enter the number: ")
let i=1;
let s="";
while(n>=i)
{
    j=1;
    while(i>=j)
    {
        s +=j;
        j++ 
    }
        j=j-2;
    while(j>=1)
    {

        s +=j;
        j--
    }
        s +="\n"
        i++
        
        
}
console.log(s);