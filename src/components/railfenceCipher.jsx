export function railfenceCipher(text, key1) {
  const s = parseInt(key1);
  text = text.replace(/\s+/g, "");
  const chars = text.split("");
  
  const r = Array.from({ length: s }, () => []);

  let directionDown = true; // to know direction of zigzag ip or down
  let i = 0;
  let row = 0;

  while (i < chars.length) {
    r[row].push(chars[i]);
    i = i + 1;

    if (directionDown) {
      if (row === s - 1) {
        directionDown = false;
        row = row - 1;
      } else {
        row = row + 1;
      }
    } else {
      if (row === 0) {
        directionDown = true;
        row = row + 1;
      } else {
        row = row - 1;
      }
    }
  }

  // Flatten all rails into single array
  const out = r.flat();
  return out.join("");
}