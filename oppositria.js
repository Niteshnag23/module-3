const input=require("readline-sync")
let n=input.question("enter the value: ")
 s=""
 let i=n

 while(i>0)
 {
    j=1;
    while(i>=j)
    {
        s+=("* ")
        j++
    }
    s+=("\n")
    i--
 }
 console.log(s);
