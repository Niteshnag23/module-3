const input=require("readline-sync")
let n=input.questionInt("enter the value: ")

while(n>9)
{   
    s=0
    while(n!=0)
    {
        p=n%10
        n=Math.floor(n/10)
        s=s+p
    }
    n=s
}
console.log(n)