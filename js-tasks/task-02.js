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

 //variant 3
function DNAtoRNA(dna) {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      rna += "U";
    } else {
      rna += dna[i];
    }
  }
  return rna;
}

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
//variant 1
function min(arr, toReturn) {
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

//variant 3
function min(arr, toReturn) {
  const minValue = Math.min(... arr);
  return toReturn === 'index' ? arr.indexOf(minValue) : minValue;
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
var min = function(list){
  let min = list[0];
  for(let i = 0; i < list.length; i++) {
      if(min > list[i]){
          min = list[i];
        }
    }
    return min;
}

var max = function(list){
  let max = list[0];
  for(let i = 0; i < list.length; i++) {
    if( max < list[i]){
        max = list[i];
      }
  }
    return max;
}

// variant 3
const min = function (list) {
  return Math.min(...list);
};

const max = function (list) {
  return Math.max(...list);
};

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

// variant 2
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");
  return position === 0 
    ? "Pls go away and stop eating my sheep"
  	: `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
// variant 1
function maps(x) {
  return x.map(function(i) {
    return i * 2;
  });
}

//variant 2
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
