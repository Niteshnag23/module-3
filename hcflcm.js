const input=require("readline-sync")
let a = input.question("enter the number: ")
let b = input.question("enter the number: ")
if (a>b)
{
    m=a
    mi=b
}
else 
{
    m=b
    mi=a
}
while(m%mi!==0)
{
    c=m%mi
    m=mi
    mi=c
}
lcm=a*b/mi
 console.log(lcm,mi)