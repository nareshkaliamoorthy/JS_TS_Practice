const str = "javascript"; //count vowels

const vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
let vowel_obj = {};
for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str.charAt(i))) {
        vowel_obj[str.charAt(i)] = (vowel_obj[str.charAt(i)] || 0) + 1;
        count++;
    }
}
console.log(count);
console.log(vowel_obj);