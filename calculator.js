'use strict'

class Calculator {
  //write your code here
  constructor (numA, numB) {
    this.numA = numA
    this.numB = numB
    this.phi = 3.14159
  }

  add () {
    console.log(this.numA + this.numB)
  }
  subtract () {
    console.log(this.numA - this.numB)
  }
  multiply () {
    console.log(this.numA * this.numB)
  }
  divide () {
    console.log(this.numA / this.numB)
  }
  square () {
    console.log(Math.pow(this.numA, this.numB))
  }
  squareRoot () {
    console.log(Math.sqrt(this.numA, this.numB))
  }
  areaOfTheCircle(){
    // phi r kuadrat
    console.log(this.phi * (this.numA * this.numA))
  }
  circumference(){
    // 2 phi r
    console.log(2 * this.phi * this.numA)
  }
}

// const calculate = new Calculator(2, 3);
// calculate.multiply()

module.exports = Calculator

/**
* you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

// execute Calculator in file index.js