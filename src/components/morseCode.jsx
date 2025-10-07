export function morseCode(text) {
  text= text.toUpperCase();
  const chars = text.split(""); // // Split the input string into an array of characters and store it in chars
  const out = []; //mpty array to store the encrypted characters
  const morse=[  // Letters
  { char: "A", code: ".-" },
  { char: "B", code: "-..." },
  { char: "C", code: "-.-." },
  { char: "D", code: "-.." },
  { char: "E", code: "." },
  { char: "F", code: "..-." },
  { char: "G", code: "--." },
  { char: "H", code: "...." },
  { char: "I", code: ".." },
  { char: "J", code: ".---" },
  { char: "K", code: "-.-" },
  { char: "L", code: ".-.." },
  { char: "M", code: "--" },
  { char: "N", code: "-." },
  { char: "O", code: "---" },
  { char: "P", code: ".--." },
  { char: "Q", code: "--.-" },
  { char: "R", code: ".-." },
  { char: "S", code: "..." },
  { char: "T", code: "-" },
  { char: "U", code: "..-" },
  { char: "V", code: "...-" },
  { char: "W", code: ".--" },
  { char: "X", code: "-..-" },
  { char: "Y", code: "-.--" },
  { char: "Z", code: "--.." },

  // Numbers
  { char: "0", code: "-----" },
  { char: "1", code: ".----" },
  { char: "2", code: "..---" },
  { char: "3", code: "...--" },
  { char: "4", code: "....-" },
  { char: "5", code: "....." },
  { char: "6", code: "-...." },
  { char: "7", code: "--..." },
  { char: "8", code: "---.." },
  { char: "9", code: "----." },

  // Special characters
  { char: ".", code: ".-.-.-" },
  { char: ",", code: "--..--" },
  { char: "?", code: "..--.." },
  { char: "'", code: ".----." },
  { char: "!", code: "-.-.--" },
  { char: "/", code: "-..-." },
  { char: "(", code: "-.--." },
  { char: ")", code: "-.--.-" },
  { char: "&", code: ".-..." },
  { char: ":", code: "---..." },
  { char: ";", code: "-.-.-." },
  { char: "=", code: "-...-" },
  { char: "+", code: ".-.-." },
  { char: "-", code: "-....-" },
  { char: "_", code: "..--.-" },
  { char: "\"", code: ".-..-." },
  { char: "$", code: "...-..-" },
  { char: "@", code: ".--.-." },
  { char: " ", code: "/" } // space between words
];

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i]; // stor each character in a variable ch for the loop
    for (let j = 0; j < morse.length; j++) {
      const m = morse[j].char;
      if ( ch=== m){
        out.push(morse[j].code)
        break;
      }
    }
  }

  return out.join(" ");
}