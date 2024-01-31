let str="rolex";
let newstr='';
for(let i=0;i<str.length;i++)
{
    if(str[i]==='x')
    {
        newstr+='y';
    }
    else{
        newstr+=str[i];
    }
}
// console.log(newstr);


// another way to do this
let newstring=str.replace("x",'z');
console.log(newstring);