// : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array

function positiveSum(numbers){
    let positiveNum = [];

    for(let i = 0; i<numbers.length; i++){
        if(numbers[i] > 0){
            positiveNum.push(numbers[i]);
        }
    }

   const total = positiveNum.reduce((sum, currentNum)=> sum+currentNum, 0)
    return total;

}

const  InputNumber = [5, -10, 15, -20, 25, 30];
const Sum = positiveSum(InputNumber)
console.log(Sum);