//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
//variant 1
function stringToArray(string) {
  return (splitArray = string.split(" "));
}

//variant 2



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

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
//variant 1
function min(arr, toReturn){
    if(toReturn==='value'){
      return Math.min(...arr);
    } else
    if(toReturn==='index'){
        return arr.indexOf(Math.min(...arr));
    } else return console.log('Wrong value'); 
}

//variant 2
