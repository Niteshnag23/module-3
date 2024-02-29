const input=require("readline-sync")
let n=input.question("enter the value: ")
let i=1;
let k=0;
let p=2;
let N=2;
let s=0;
while(n>=i)
{
    while(i==1)
    {
        s += k;
        k=k+2;
        i++
        s +="\n"
    }
        j=1;
    while(p>=j)
    {
        s += k;
        k =k*2;
        j++
    }
    
       k=k/2

    while(N>=j)
    {
        s +=k
        j++
    }
        i++
        N++
        s +="\n"

}
console.log(s);