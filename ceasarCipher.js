//     Caesar Cipher
//         Description: Implement a basic Caesar Cipher encryption.
//         Requirements:
//             The program should take a phrase and a shift number as inputs from process.argv.
//             Encrypt the phrase by shifting each letter, based on its position in the english alphabet, by the specified number.
//             Case insensitive
//             A negative shift means shift to the left
//             A positive shift means shift to the right
//             Output the encrypted phrase to the console.
//         Example:
//             node caesarCipher.js "hello world" 3
//             # Output: khoor zruog



// Function to perform Caesar Cipher encryption
function caesarCipher(phrase, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetUpper = alphabet.toUpperCase();
    let encryptedPhrase = '';

    // Normalize the shift to be within the range of 0-25
    shift = shift % 26;

    for (let char of phrase) {
        if (alphabet.includes(char)) {
            // Find the new position and handle wrapping around
            let newIndex = (alphabet.indexOf(char) + shift + 26) % 26;
            encryptedPhrase += alphabet[newIndex];
        } else if (alphabetUpper.includes(char)) {
            let newIndex = (alphabetUpper.indexOf(char) + shift + 26) % 26;
            encryptedPhrase += alphabetUpper[newIndex];
        } else {
            // If character is not a letter, add it as is
            encryptedPhrase += char;
        }
    }

    return encryptedPhrase;
}

// Get inputs from process.argv
const phrase = process.argv[2];
const shift = parseInt(process.argv[3]);

// Check if inputs are provided
if (!phrase || isNaN(shift)) {
    console.error("Usage: node caesarCipher.js <phrase> <shift>");
    process.exit(1);
}

// Perform the encryption and output the result
const encryptedPhrase = caesarCipher(phrase, shift);
console.log(encryptedPhrase);
