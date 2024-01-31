// Count how many times a string has the letter a or A
let name="RAsel ahmed";
let cnt=0;
for(const letter of name)
{
    cnt+=(letter=='a' || letter=='A');
}
console.log(cnt);