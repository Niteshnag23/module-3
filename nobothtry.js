const input=require("readline-sync")
let n=input.question("enter the value: ")
i=1;
k=1;
s=""
m=n+(n-1)

while(n>=i)
{
    p=n;
    j=1;
    while(k>=j)
    {
        s+=p
        j++
        p--
    }
      p=p+2;
      while(p<=n)
      {
        s+=p
        p++
      }   
        s+="\n" 
        i++
        k++
} 
        k=k-2;
while(m>=i)
{
    p=n;
    j=1;

while(k>=j)
{
    s+=p
        j++
        p--
}
    p=p+2
    while(p<=n)
    {
        s+=p
        p++
    }
    s+="\n" 
        i++
        k--
}
console.log(s);