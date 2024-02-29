const input=require("readline-sync")
let m=input.question("enter the value: ")
let n=input.question("enter the value: ")
s=0;
t=0;
k=n;
l=n;
let answer=Math.floor("");
while(n>=m)
{
    while(n!=0)
    {
        p=n%10
        n=Math.floor(n/10)
        s=s+1
    }
        while(k!=0)
        {
            p=k%10
            k=Math.floor(k/10)
            t=t+p^s
        }
            if(l==t)
            {
                e=t
                console.log(e);
            }
            n++
}

