const input=require("readline-sync")
let m=input.questionInt("enter the first value: ")
let n= input.questionInt("enter the second value: ")

function countN(i)
{
    return String(i).length;
 }
 let i=m
var count=countN(i);
while(i<=n)
{   m=i
    s=0
    while(m!=0)
    {
        c=m%10
        m=Math.floor(m/10)
        s+=(c**count);
    }
    if(i==s)
    {
      console.log(i,"-armstrong number")   
      i++
    }else i++
}