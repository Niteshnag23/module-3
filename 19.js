const input=require("readline-sync")
let n=input.question("enter the value: ")
let a=[n];
i=0;

while(i<n)
{
    let b=input.question("enter the value:" + (i+1)+"=");
    a[i]=b;
    i++;
}

let c=input.question("enter the number you want to delete: ")

a.splice(c,1);
console.log(a);