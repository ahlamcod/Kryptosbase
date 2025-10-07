export function vigenereCipher(text, key1) {
  const chars = text.split(""); // // Split the input string into an array of characters and store it in chars
  const out = []; //mpty array to store the encrypted characters

  //cretion of the key of vigenere
  let k='';
  let i=0; 
  while (k.length < chars.length)
  {
    k=k+ key1[i];
    i = (i + 1) % key1.length;

  }

  for (let j = 0; j < chars.length; j++) {
    const pi = chars[j].charCodeAt(0);
    const ki= k[j].charCodeAt(0);
    if (pi >= 65 && pi <= 90) { //Check if it's an uppercase letter (A–Z)
      out.push(String.fromCharCode(((pi - 65 + (ki - 65)) % 26) + 65)); //add a new element to the end of an array after turnning it back to an int
    } else if (pi >= 97 && pi <= 122) { //Check if it's an lowercase letter (a-z)
      out.push(String.fromCharCode((pi -97 + (ki - 97) % 26) + 97)); //add a new element to the end of an array after turnning it back to an int
    } else { // If it's not a letter like a space, number, or punctuation just keep it unchanged
      out.push(chars[j]); //add a new element to the end of an array.
    }
  }

  return out.join("");
}