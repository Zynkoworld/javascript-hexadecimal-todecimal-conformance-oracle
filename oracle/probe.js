const toDecimal = (hex) => {
  const hexCharacters = [...hex];

  for (let i = 0; i < hexCharacters.length; i += 1) {
    if (/[^0-9a-fA-F]/.exec(hexCharacters[i])) {
      return 0;
    }
  }

  return parseInt(hex, 16);
};

const __in = ["1", "c", "10", "af", "100", "19ace", "carrot", "000000", "ffffff", "ffff00"];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: toDecimal(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
