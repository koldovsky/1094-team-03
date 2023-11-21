//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
  return (splitArray = string.split(" "));
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  dna = dna.split("");
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") dna[i] = "U";
  }
  return dna.join("");
}
