const input=require("readline-sync")
let n=input.question("enter the value: ")

i=1;
a=0;
b=n;
c=(n/2)+0.5

while(i<=c)
{
    s=("");
    j=1;
    if(a>0)
    {
        while(j<=a)
        {
            s +="x ";
            j++

        }
    }j=1;
    while(j<=b)
    {
        s +="0 ";
        j++;
    }j=1;
    if(a>0)
    {
        while(j<=a)
        {
            s +="x ";
            j++
        }
    }
    console.log(s);
    b -= 2;
    i++;
    a++;
}

b += 4;
a -= 2;

while(i<=n)
{
    s =("");
    j=1;

    if(a>0)
    {
        while(j<=a)
        {
            s +="x ";
            j++;
        }
    }j=1;
    while(j<=b)
    {
        s +="0 ";
        j++;
    }j=1;
    if(a>0)
    {
        while(j<=a)
        {
            s +="x ";
            j++
        }
    }
    console.log(s);
    b += 2;
    i++;
    a--;
}
