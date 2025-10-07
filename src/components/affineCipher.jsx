export function affineCipher(text, key1, key2) {
  const a = parseInt(key1); // turn the key1 from a string to an int
  const b = parseInt(key2); // turn the key2 from a string to an int
  const chars = text.split(""); // // Split the input string into an array of characters and store it in chars
  const out = []; //mpty array to store the encrypted characters

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i]; // stor each character in a variable ch for the loop
    let code = ch.charCodeAt(0); //code stores an interger represent the ascii code of the character
    if (code >= 65 && code <= 90) //if it's a character upper 
    {
       code=code-65;
       code= (a*code + b) % 26 ; 
       out.push(String.fromCharCode(code + 65)); //if it's a character upper 
    }
    else if (code >= 97 && code <= 122)
        {
            code=code-97;
            code= (a*code + b) % 26 ; 
            out.push(String.fromCharCode(code + 97)); //if it's a character lower
        }
    else
    {
        out.push(String.fromCharCode(code));//add a new element to the end of an array anywayse.
    }
    }


  return out.join("");
}