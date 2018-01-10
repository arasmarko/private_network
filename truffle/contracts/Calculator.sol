pragma solidity ^0.4.4;

contract Calculator {

  // Result of the operation are always stored in this variable
  uint result = 21;

  event Result(uint number);

  function Calculator() {
    // constructor
  }

  // returns the result
  function getResult() constant returns (uint) {
    return result;
  }

  // result = result + num
  function addToNumber(uint num) {
    result += num;
    Result(result);
  }

  // result = result - num
  function substractNumber(uint num) {
    result -= num;
    Result(result);
  }

  // result = result * num
  function multiplyWithNumber(uint num) {
    result *= num;
    Result(result);
  }

  // result = result / num
  function divideByNumber(uint num) {
    result /= num;
    Result(result);
  }

}

