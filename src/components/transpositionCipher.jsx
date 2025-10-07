// Function that encrypts text using the Columnar Transposition Cipher
export function transpositionCipher(text, key1) {

  // Clean the text by removing spaces and punctuation, convert to uppercase
  text = text.replace(/[^A-Za-z]/g, "").toUpperCase();

  // 'cols' = number of columns in the grid = length of the key1
  const cols = key1.length;

  // 'rows' = how many rows we’ll need to fit the text
  const rows = Math.ceil(text.length / cols);

  // Create a 2D array (a grid)
  const grid = []; 

  // 'index' will track our position in the plaintext
  let index = 0;

  // Loop to fill each row of the grid
  for (let r = 0; r < rows; r++) {
    const row = []; 

    // Fill each column in this row
    for (let c = 0; c < cols; c++) {
      if (index < text.length) {
        // If there are still letters left in the text
        row.push(text[index]); // add next letter
      } else {
        // If we run out of letters we fill with 'X'
        row.push("X");
      }
      index++; 
    }

    // Add the completed row to the grid
    grid.push(row);
  }
  
  // Convert key1 into an array of numbers
  const key1Nums = [];
  for (let i = 0; i < key1.length; i++) {
    key1Nums.push(parseInt(key1[i]));
  }

  // Figure out column order (which columns to read first)
  const order = []; // will store column indexes in sorted order
  const used = new Array(cols).fill(false); // an array to mark columns we've already used

  // We go through numbers from 1 up to the length of the key1
  for (let n = 1; n <= cols; n++) {
    for (let i = 0; i < cols; i++) {
      // If the current key1 number matches n (smallest first)
      // and we haven’t used it yet
      if (key1Nums[i] === n && !used[i]) {
        order.push(i); // store that column index
        used[i] = true; // mark it as used
        break; // move on to the next number
      }
    }
  }

  // Read the grid column by column in the order from the key1
  let out = ""; // will hold the final encrypted message

  for (let o = 0; o < order.length; o++) {
    const col = order[o]; // current column index
    for (let r = 0; r < rows; r++) {
      out += grid[r][col]; // read vertically
    }
  }

  // Return the final out
  return out;
}
