const input=require("readline-sync")
let n=input.question("enter the total number: ")
let i=0
let a=[n]
while(n>i)
{
    let b=input.question("enter the numbers"+(i+1)+"=")
    a[i]=b
    i++
}
let c=input.question("enter the number which you want to delete: ")
a.splice(c-1,1)
console.log(a)