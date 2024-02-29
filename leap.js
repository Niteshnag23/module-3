const input=require("readline-sync")
let n=input.question("enter the year: ")

if((n%4==0 && n%100!==0)||(n%100==0 && n%400==0))
{
    console.log("leap year");
}
else console.log("not leap");