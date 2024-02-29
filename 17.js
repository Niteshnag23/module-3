const input=require("readline-sync")
let n= input.questionInt("enter the input: ")
let s=""
let i=2

while(n!=1)
{
  
        if(n%i==0)
        {
            n=n/i
            s+=i
            s+="\n"
            
        }else
        i++
    
}
console.log(s)