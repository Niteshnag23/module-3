const input=require("readline-sync")
let a=input.question("enter the value:");
let b= input.question("enter the value:")
let c=input.question("enter the value:");
let d=input.question("enter the value:");
 
if(a>b)
{
    m=a
    mi=b
}
else
{
    m=b
    mi=a
}
if(c>d)
{
    ma=c
    min=d
}
else 
{
    ma=d
    min=c
}
if(m>ma)
{
    max=m
    mini=ma
    nitesh=mi
}
else
{
    max=ma
    mini=m
    nitesh=min
}
if(nitesh>mini)
{
    console.log(nitesh)
}
else
{
    console.log(mini)
}