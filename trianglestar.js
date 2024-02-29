const input =require("readline-sync")
let n=input.question("enter the number: ")
let i=1 ;
let st="";
while(n>=i)
{
    j=1;
    while(i>=j)
    {
        st += "* "
        j++
    }
    st +="\n"
    i++
}
console.log(st);