//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
  return Math.min(...args);
  }
}


https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  const circumference = 2 * Math.PI * circle.radius;
  return parseFloat(circumference.toFixed(6));
}

function circleCircumference(Circle) {
  return 2 * Math.PI * Circle.radius.toFixed(6);
}

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  var resultArray = [];
  for (var key in obj) {
    if (key.length === 5) {
      resultArray.push(key);
    }
    var value = obj[key];
    if (value && value.length === 5) {
      resultArray.push(value);
    }
  }
  return resultArray;
}

function giveMeFive(obj){
  const fiveChar = [];
  for (let key in obj) {
    if (key.length === 5) {
      fiveChar.push(key);
    } 
    if (obj[key].length === 5) {
      fiveChar.push(obj[key]);
    } 
  }
  return fiveChar;
}

//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n) {

  const res = [];

  for (let i = 0; i < n; i++) {
    res.push(function() {
      return i;
    });
  }
  return res;
}

//https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
class Shark extends Animal {
  constructor(name, age, status, legs, species) {
    super(name, age, legs, species, status);
    this.legs = 0;
    this.species = "shark";
  }
}
class Cat extends Animal {
  constructor(name, age, status, legs, species) {
    super(name, age, legs, species, status);
    this.legs = 4;
    this.species = "cat";
  }
  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}
class Dog extends Animal {
  constructor(name, age, status, master, legs, species) {
    super(name, age, legs, species, status);
    this.legs = 4;
    this.species = "dog";
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
