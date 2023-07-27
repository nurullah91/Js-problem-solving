// Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.




const calculator = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => {
      if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return num1 / num2;
    },
  };
  
  function calculate(num1, operator, num2) {
    if (operator in calculator) {
      return calculator[operator](num1, num2);
    } else {
      throw new Error("Invalid operator. Supported operators are '+', '-', '*', and '/'.");
    }
  }
  

  console.log(calculate(4, "*" , 3));