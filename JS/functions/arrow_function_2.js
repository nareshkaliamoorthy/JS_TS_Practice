const square = (num1) => {
    console.log(num1 * num1)
};
square(6);

const countVowels = (text) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let txt_arr = text.split("");
    let stringVowels = [];
    for (const txt of txt_arr) {
        if (vowels.includes(txt.toLowerCase())) {
            stringVowels.push(txt);
        }
    }
    console.log(stringVowels);

}
countVowels("Javascript")