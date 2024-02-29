const input=require("readline-sync")
let n=input.question("enter the number: ")

i=1;
a=1;

while(i<=n)
{
    s=("");
    j=1;
    while(j<=a)
    {
        s+="* ";
        j++;
    }   
    if(i!=n)
    {
        s+=" ";
    }
    j=1;
    while(j<=a)
    {
        s+="* "
        j++
    }
    console.log(s)
    a++;
    i++;
}

i-=2;
a-=2;

while(i>=1)
{
    s=("");
    j=1;

    while(j<=a)
    {
        s+="* "
        j++;
    }
    if(i!=n)
    {
        s+=" ";
    }
    j=1;
    while(j<=a)
    {
        s+="* ";
        j++;
    }
    console.log(s);
    a--;
    i--;
}