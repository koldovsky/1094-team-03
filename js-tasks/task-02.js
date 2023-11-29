//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
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
function min(arr, toReturn) {
  const minValue = Math.min(... arr);
  return toReturn === 'index' ? arr.indexOf(minValue) : minValue;
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = function (list) {
  return Math.min(...list);
};

const max = function (list) {
  return Math.max(...list);
};

// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");
  return position === 0 
    ? "Pls go away and stop eating my sheep"
  	: `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
// variant 1
function maps(x) {
  return x.map(num => num * 2);
}

//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] !== 1) {
          return arr[i];
      }
  }
  return null;
}
