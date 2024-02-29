const input=require("readline-sync")
let n=input.question("enter the value: ")
let a=input.question("enter the number: ")
let i=1;
while(n>i)
{

let b=input.question("enter the number:")
if(a>b)
{
    m=a
    ma=b
}
else
{
    m=b
    ma=a
}
while(m%ma!=0)
{
    c=m%ma
    m=ma
    ma=c
}
 a=ma
 b=c
 i++
}
console.log(a)