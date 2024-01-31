let originalString = "hello, world";
let words = originalString.split(" ");
let modifiedString = "";
for(let i=0;i<words.length;i++)
{
    let word=words[i];
    if(word.length>0)
    {
        modifiedString += word[0].toUpperCase()+word.slice(1)+" ";
    }
}
console.log(modifiedString);