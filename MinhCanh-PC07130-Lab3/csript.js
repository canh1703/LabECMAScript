let multiply = (num1, num2) => num1 * num2;

let toCelsius = fahrenheit => (5 / 9) * (fahrenheit - 32);

let padZeros = (num, totallen) => {
  let numStr = num.toString();
  let numZeros = totallen - numStr.length;

  for (let i = 1; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }

  return numStr;
};

let power = (base, exponent) => {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
};

let greet = who => console.log("Hello" + who);
