const input =require("readline-sync")
let n=input.question("enter the value: ")
let i=1;
let a=1;
let t=n;
let s=""
p=n
while(n>=i)
{
   
    j=0
    k=1
    while(a>=j)
    {
        s+=p
        p++
        j++
        k++
    }
    p=p-2
    while(n+1>=k)
    {
        s+=p
        p--
        k++
    }
    s+="\n"
    t--
    i++
    a++
      
}
console.log(s)