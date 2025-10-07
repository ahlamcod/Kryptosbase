export function caesarCipher(text, key1) {
  const s = parseInt(key1); // turn the key from a string to an int
  const chars = text.split(""); // // Split the input string into an array of characters and store it in chars
  const out = []; //mpty array to store the encrypted characters

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i]; // stor each character in a variable ch for the loop
    const code = ch.charCodeAt(0); //code stores an interger represent the ascii code of the character

    if (code >= 65 && code <= 90) { //Check if it's an uppercase letter (A–Z)
      out.push(String.fromCharCode(((code - 65 + s) % 26) + 65)); //add a new element to the end of an array after turnning it back to an int
    } else if (code >= 97 && code <= 122) { //Check if it's an lowercase letter (a-z)
      out.push(String.fromCharCode(((code - 97 + s) % 26) + 97)); //add a new element to the end of an array after turnning it back to an int
    } else { // If it's not a letter like a space, number, or punctuation just keep it unchanged
      out.push(ch); //add a new element to the end of an array.
    }
  }

  return out.join("");
}