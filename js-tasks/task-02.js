//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
//variant 1
function stringToArray(string) {
  return (splitArray = string.split(" "));
}

//variant 2
function stringToArray(string) {
  return string.split(" ");
}



//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
//variant 1
function DNAtoRNA(dna) {
  dna = dna.split("");
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") dna[i] = "U";
  }
  return dna.join("");
}

//variant 2
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
 }

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
//variant 1
function min(arr, toReturn) {
  if (toReturn === "value") {
    return arr[0];
  } else if (toReturn === "index") {
    return arr.indexOf(arr[0]);
  } else return console.log("Wrong value");
}

//variant 2
