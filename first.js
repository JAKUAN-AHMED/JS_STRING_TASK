// Count how many times a string has the letter a
let name="bandarban";
let cnt=0;
for(const letter of name)
{
    cnt+=(letter=='a');
}
console.log(cnt);