import { useState } from "react";
import { caesarCipher } from "./caesarCipher";
import { affineCipher } from "./affineCipher";
import { vigenereCipher } from "./vigenereCipher";
import { railfenceCipher } from "./railfenceCipher";
import { transpositionCipher } from "./transpositionCipher";
import { pigpenCipher } from "./pigpenCipher";
import { morseCode } from "./morseCode";

function MainPage() {

    const [input, setInput] = useState(""); //declare a state variable called input
    const [output, setOutput] = useState(""); //declare a state variable called output
    const [key1, setKey1] = useState(""); //  for algorithms that need a key
    const [key2, setKey2] = useState(""); //  for algorithms that need a key
    const [selectedCipher, setSelectedCipher] = useState("Caesar Cipher"); //to get what user selected as a cipher

    //function called handleEncrypt that choose which algorithme to apply and apply it.
      const handleEncrypt = () => {
    let result = "";

    if (selectedCipher === "Caesar Cipher") {
      result = caesarCipher(input, parseInt(key1)); 
    } 
    else if (selectedCipher === "Affine Cipher") {
      result = affineCipher(input, key1, key2);
    } 
    else if (selectedCipher === "Vigenère Cipher") {
      result = vigenereCipher(input, key1);
    } 
    else if (selectedCipher === "Rail Fence Cipher") {
      result = railfenceCipher(input, key1);
    } 
    else if (selectedCipher === "Columnar Transposition Cipher") {
      result = transpositionCipher(input, key1);
    } 
    else if (selectedCipher === "Pigpen Cipher"){
        result = input;
    }
    else if (selectedCipher === "Morse Code") {
      result = morseCode(input, key1);
    } 

    setOutput(result);
  };

  return (
    <>
<div className="bg-[#CDC8B8]">
    <div className="flex gap-3 items-center">
        <p className="text-[96px] text-black pl-45 ml-[170px]"> Welcome to Kryptosbase</p>
        <img src="/ink.png" alt="ink" className="w-[77px] h-[78px] mt-10"/>
    </div>
    <img src="/pearls.png" alt="pearls" className="h-[400px] mt-[-50px] z-10 relative -ml-[80px] "/>
    <div className="flex gap-50 items-center pl-25 mt-[-350px] ">
        <div>
            <img src="/frame.png" alt="frame" className="h-[450px] z-0 relative "/>
            <div className="bg-[#C0A887] w-[410px] h-[260px] z-0 relative ml-[80px] -mt-[350px]">
                <p className="text-[32px] text-black absolute ml-[130px]">PlainText</p> <br /><br />
                <input type="text" placeholder="Enter your message" value={input} onChange={(e) => setInput(e.target.value)} className="inputoutputText text-black mx-2 w-[380px] h-[40px]"/> {/*get the user input*/}
            </div>
        </div>
            
           
        <div>
            <img src="/frame.png" alt="frame" className="h-[450px] z-0 relative"/>
            <div className="bg-[#C0A887] w-[410px] h-[260px] z-0 relative ml-[80px] -mt-[350px]">
                <p className="text-[32px] text-black absolute ml-[130px]">CipherText</p> <br /><br />
                {selectedCipher === "Pigpen Cipher" ? ( //if it's pigpen
                    <p style={{ fontFamily: "Pigpen" }} className="text-[12px] text-black mx-2 w-[380px] h-[40px]"> {output} </p>
                    ) : ( //else
                   <p className="text-[14px] text-black  mx-2 inputoutputText w-[380px] h-[40px]">{output}</p> )
                }
            </div>
        </div>
    </div>
    <br /><br /><br /><br />
    <div className="flex gap-70 items-center ml-[20px] relative overflow-hidden">
        <img src="/enevelop.png" className=" h-[200px] -rotate-20 "alt="enevelop" />
        <img src="/frame.png" className=" h-[200px] z-0 relative"alt="frame" />
        <img src="/clock.png" className=" h-[300px] z-10 relative ml-[200px]"alt="clock" />
    </div>
    <div className="bg-[#C0A887] text-black text-[19px] p-2 h-[115px] w-[181px] -mt-[202px] mx-[635px] z-10 relative">
        <select className="w-[170px]" value={selectedCipher} onChange={(e) => setSelectedCipher(e.target.value)}>
          <option value="Caesar Cipher">Caesar Cipher</option>
          <option value="Vigenère Cipher">Vigenère Cipher</option>
          <option value="Rail Fence Cipher">Rail Fence Cipher </option>
          <option value="Affine Cipher">Affine Cipher</option>
          <option value="Columnar Transposition Cipher">Columnar Transposition Cipher</option>
          <option value="Pigpen Cipher">Pigpen Cipher</option>
          <option value="Morse Code">Morse Code</option>
        </select>
              <label htmlFor="Key1" className="text-[14px]">Key 1: &nbsp;</label>
              <input type="text" placeholder="Enter key 1" className="inputoutputText w-[105px] text-[14px]" value={key1} onChange={(e) => setKey1(e.target.value)}/>
              <br /><label htmlFor="Key2" className="text-[14px]">Key 2: &nbsp;</label>
              <input type="text" placeholder="Enter key 2" className="inputoutputText w-[105px] text-[14px]" value={key2} onChange={(e) => setKey2(e.target.value)}/>
        <br /><br /><br />
        <br /><br /><br />
        <button onClick={handleEncrypt} className="p-0 border-none bg-transparent">
                <img src="/button.png" alt="Run algorithm" className="w-[45px] h-[45px] cursor-pointer ml-[60px] -mt-[140px]"/>
        </button>
    </div>
</div>
 {/*The Ciphers page again*/}
 
    <div className="bg-[#CDC8B8] min-h-screen p-10">
        
<br /><br /><br /><br />
      <div className="mx-[60px]">
        <select value={selectedCipher}           
                onChange={(e) => setSelectedCipher(e.target.value)}
                className="bg-[#CDC8B8] text-black text-[34px] p-2 rounded-lg">
          <option value="Caesar Cipher">Caesar Cipher</option>
          <option value="Vigenère Cipher">Vigenère Cipher</option>
          <option value="Rail Fence Cipher">Rail Fence Cipher </option>
          <option value="Affine Cipher">Affine Cipher</option>
          <option value="Columnar Transposition Cipher">Columnar Transposition Cipher</option>
          <option value="Pigpen Cipher">Pigpen Cipher</option>
          <option value="Morse Code">Morse Code</option>
        </select>
        <p className="mt-6 text-[18px] text-gray-600 italic inputoutputText">
  Disclaimer: The encryption methods shown on Kryptosbase follow one of the classical implementations of each cipher. 
  Different sources and historical versions may use slightly different conventions (such as filler letters, spacing rules, or key numbering). 
  While outputs can differ, the underlying logic of the cipher remains the same.
</p>
      </div>

      <br />
{/* Conditional Rendering */}
      {selectedCipher === "Caesar Cipher" && (
        <div className="algoText flex gap-30 items-center mx-[30px]">
        <img src="/caesar.png" alt="caesar" className="h-[360px] w-[360px] ml-[30px]" />
        <p className="mr-[50px] text-black text-[24px]">
          The Caesar cipher, named after Julius Caesar who used it in his military communications, is one of the oldest known ciphers. It works by shifting each plaintext letter (Pi​) by a fixed key k (integer ≠ 0). The formula is:
          Ci = (Pi + k) mod 26.
          Example: Plaintext SECRET, Key k = 3. After shifting, ciphertext = VHFUHW.
        </p>
      </div>
      )}
      {selectedCipher === "Vigenère Cipher" && (
        <div className="algoText flex gap-30 items-center mx-[30px]">
        <img src="/vigenere.png" alt="vigenere" className="h-[360px] ml-[30px]" />
        <p className="mr-[50px] text-black text-[24px]">
          The Vigenère cipher, described by Giovan Battista Bellaso in 1553 and later misattributed to Blaise de Vigenère, was long considered “unbreakable.” It encrypts by shifting each plaintext letter (Pi​) using the corresponding keyword letter (Ki​), both mapped to numbers 0–25.
          <br /> The formula is:
          Ci=(Pi+Ki)mod 26 <br />
          where Ci= ciphertext letter. <br />
          Example: Plaintext ATTACKATDAWN, Keyword LEMON (repeated: LEMONLEMONLE) → Ciphertext LXFOPVEFRNHR.
        </p>
      </div>
      )}

      {selectedCipher === "Columnar Transposition Cipher" && (
        <div className="algoText flex gap-30 items-center mx-[30px]">
        <img src="/transposition.png" alt="transposition" className="h-[400px] w-[630px] ml-[30px]" />
        <p className="mr-[50px] text-black text-[24px]">
  The Columnar Transposition cipher, widely used in the 19th–20th centuries, is a transposition method that rearranges letters without substitution. Plaintext is written row-by-row into a grid under a numeric key, and ciphertext is obtained by reading the columns in the ascending order of the key digits. If the grid is incomplete, filler letters (commonly "X") are added to finish it.
  <br />Example: Plaintext WE ARE DISCOVERED. FLEE AT ONCE, Key 632415. <br />
  <br />6&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;5
  <br />W E A R E D
  <br />I S C O V E
  <br />R E D F L E
  <br />E A T O N C
  <br />E X X X X X &nbsp;&nbsp;&nbsp;← fillers
  <br />Ciphertext = EVLNXACDTXESEAXROFOXDEECXWIREE
</p>
      </div>
      )}

        {selectedCipher === "Affine Cipher" && (
        <div className="algoText flex gap-30 items-center mx-[30px]">
        <img src="/affine.png" alt="affine" className="h-[383px] w-[255px] ml-[30px] mt-4" />
        <p className="mr-[50px] text-black text-[24px]">
           The Affine cipher, a classical monoalphabetic substitution, is based on modular arithmetic and was studied in the 19th–20th centuries as an extension of the Caesar cipher. It applies a simple formula to each letter:
           <br />C=(aP+b)mod 26
           <br />where:
           <ul>
            <li>P= plaintext letter (0–25)</li>
            <li>a, b= keys (a must be coprime with 26),</li>
            <li>C= ciphertext letter</li>
           </ul>
            <br />Example: Key a=5, b=8 Plaintext AFFINE → Ciphertext IHHWVC. </p>
      </div>
      )}

{selectedCipher === "Rail Fence Cipher" && (
        <div className="algoText flex gap-30 items-center mx-[30px]">
        <img src="/railfence.png" alt="railfence" className="h-[438px] w-[293px] ml-[30px]" />
        <p className="mr-[50px] text-black text-[24px]">
        The Rail Fence cipher, a classical transposition cipher used in the 19th century, encrypts text by writing letters in a zig-zag across multiple rows and then reading them row by row. The key k is the number of rows.
        <br />Steps:
        <ol>
        <li>Write plaintext diagonally in a zig-zag with krows.</li>
        <li>Read rows sequentially to form ciphertext.</li>
        </ol>
        <br />Example: Plaintext BUY YOUR BOOKS IN AUGUST, Key k= 3.
        <br />&nbsp;&nbsp;B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;G 
        <br />&nbsp;&nbsp;&nbsp;&nbsp;U&nbsp;&nbsp;&nbsp;&nbsp;Y&nbsp;&nbsp;&nbsp;&nbsp;U&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;S&nbsp;&nbsp;&nbsp;&nbsp;N&nbsp;&nbsp;&nbsp;&nbsp;U&nbsp;&nbsp;&nbsp;&nbsp;T 
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S <br />
        Ciphertext = BOOIGUYUBOSNUUTYRKAS.</p>
      </div>
      )}

      {selectedCipher === "Morse Code" && (
        <div className="algoText flex gap-30 items-center mx-[30px]">
        <img src="/morse.webp" alt="morse" className="h-[400px] w-[630px] ml-[30px]" />
        <p className="mr-[50px] text-black text-[24px]">
          The Morse code, invented in the 1830s by Samuel Morse and Alfred Vail, is an encoding system where letters and numbers are represented by dots (·) and dashes (–). It was widely used in telegraphy and radio for long-distance communication.
          <br />Rules: <br />
          Dot (·) = short signal, Dash (–) = long signal. <br />
          Letters separated by spaces, words by longer pauses.
          Example: Plaintext HELLO → .... . .-.. .-.. --- <br />
          Full Table: <br />
          LetterCodeLetterCodeNumberCodeA = ·–N = –·0 = –––––B = –···O = –––1 = ·––––C = –·–·P = ·––·2 = ··–––D = –··Q = ––·–3 = ···––E = ·R = ·–·4 = ····–F = ··–·S = ···5 = ·····G = ––·T = –6 = –····H = ····U = ··–7 = ––···I = ··V = ···–8 = –––··J = ·–––W = ·––9 = ––––·K = –·–X = –··–L = ·–··Y = –·––M = ––Z = ––··
        </p>
      </div>
      )}

    {selectedCipher === "Pigpen Cipher" && (
        <div className="algoText flex gap-30 items-center mx-[30px]">
        <img src="/pigpen.png" alt="pigpen" className="h-[400px] w-[630px] ml-[30px] mt-4" />
        <p className="mr-[50px] text-black text-[24px]">
          The Pigpen cipher, also called the Masonic cipher, is a simple substitution cipher that replaces each letter with a unique symbol. It was famously used by the Freemasons in the 18th century to keep records secret.
          <br />Method: <br />
          The alphabet is split into grids and X-shapes. Each letter is replaced by the part of the grid or X it falls into, sometimes with or without a dot. There is no math involved, only symbol substitution.
          <br />Example: Plaintext MEET → Ciphertext symbols(Symbols depend on the chosen Pigpen key chart)   </p>
      </div>
      )}
      <img src="/ink2.png" alt="ink" className="h-[130px] w-[111px]"/>
    </div>
</>
);

  
}

export default MainPage;