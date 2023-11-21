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
function min(arr, toReturn){
    if(toReturn==='value'){
      return Math.min(...arr);
    } else
    if(toReturn==='index'){
        return arr.indexOf(Math.min(...arr));
    } else return console.log('Wrong value'); 
}

//variant 2
function min(arr, toReturn) {
  if (toReturn === "value") {
    return Math.min(...arr);
  } else {
    return arr.indexOf(Math.min(...arr));
  }
}


//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
// variant 1
var min = function(list) {
  return Math.min(...list);
}
var max = function(list) {
  return Math.max(...list);
}

// variant 2

// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
// variant 1
function warnTheSheep(queue) {
  const wolfIndex = queue.indexOf("wolf");
  if (wolfIndex === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    const sheepNumber = queue.length - 1 - wolfIndex;
    return "Oi! Sheep number " + sheepNumber + "! You are about to be eaten by a wolf!";
  }
}

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
// variant 1
function maps(x) {
  return x.map(function(i) {
    return i * 2;
  });
}