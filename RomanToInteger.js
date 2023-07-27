// Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.



function romanToInteger(romanNumeral) {
    const romanNumeralsMap = new Map([
      ['I', 1],
      ['V', 5],
      ['X', 10],
      ['L', 50],
      ['C', 100],
      ['D', 500],
      ['M', 1000],
    ]);
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentNumeral = romanNumeral[i];
      const currentNumeralValue = romanNumeralsMap.get(currentNumeral);
      const nextNumeralValue = romanNumeralsMap.get(romanNumeral[i + 1]);
  
      if (nextNumeralValue > currentNumeralValue) {
        result += nextNumeralValue - currentNumeralValue;
        i++; // Skip the next numeral since it's already accounted for
      } else {
        result += currentNumeralValue;
      }
    }
  
    return result;
  }
  
  console.log(romanToInteger("IX")); 