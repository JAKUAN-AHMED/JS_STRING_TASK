// Check whether a string contains all the vowels a, e, i, o, u

/*
const city = "aeiouAEIOU";
let freq = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 };

for (const char of city) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        if (freq[char] < 1) {
            freq[char]++;
        }
    }
}

let count = 0;
for (const key in freq) {
    if (freq[key] > 0) {
        count++;
    }
}

if (count === 5) {
    console.log("All the vowels are present in the string");
} else {
    console.log("Not all vowels are present in the string");
}
*/


// another way to do this
const city = "YourStringHere";
const vowels = /[aeiou]/g;
const vowelCount = (city.match(vowels) || []).length;

if (vowelCount === 5) {
    console.log("All the vowels are present in the string");
} else {
    console.log("Not all vowels are present in the string");
}
