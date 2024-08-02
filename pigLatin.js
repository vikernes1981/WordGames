//     English to Pig Latin Translator
//         Description: Create a program that translates English text to Pig Latin.
//         Requirements:
//             The program should take an English phrase as an input from process.argv.
//             Convert each word to Pig Latin:
//   If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”
//                     Example: Happy = appyh + ay = appyhay
//   If a word starts with two consonants move the two consonants to the end of the word and add “ay.”
//                     Example: Child = Ildch + ay = Ildchay
//                 If a word starts with a vowel add the word “way” at the end of the word.
//                     Example: Awesome = Awesome +way = Awesomeway
//             Output the translated phrase to the console.
//         Example:
//             node pigLatin.js "Pig Latin is hard to speak"
//             # Output: Igpay Atinlay isway ardhay otay eakspay



// Extract the arguments passed to the script, excluding the first two elements (node and script path)
const firstArg = process.argv.slice(2);

// Check if exactly one word is provided as an argument
if (firstArg.length !== 1) {
    // If not, output an error message
    console.error("Enter a word");
    // Exit the function
    return;
}

// Convert the provided word to lowercase
let word = firstArg[0].toLowerCase();

// Function to check if a given letter is a vowel
// The includes() method of Array instances determines whether an 
// array includes a certain value among its entries, returning true or false as appropriate.
const isVowel = (letter) => {
    return ['a', 'e', 'i', 'o', 'u'].includes(letter);
}

// Check if the word starts with a vowel
if (isVowel(word[0])) {
    // If the word starts with a vowel, add "way" to the end
    console.log(word + 'way');
} else if (!isVowel(word[0]) && !isVowel(word[1])) {
    // If the word starts with two consonants
    // Move the first two letters to the end and add "ay"
    console.log(word.slice(2) + word.slice(0, 2) + 'ay');
} else {
    // If the word starts with a consonant followed by a vowel
    // Move the first letter to the end and add "ay"
    console.log(word.slice(1) + word[0] + 'ay');
}

