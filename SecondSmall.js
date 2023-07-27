//Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number. 


function findSecondSmallest(numbersArray) {
    if (numbersArray.length < 2) {
        throw new Error("Array must have at least two elements.");
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (const num of numbersArray) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    if (secondSmallest === Infinity) {
        throw new Error("No second smallest element found in the array.");
    }

    return secondSmallest;
}


const numbers = [10, 4, 7, 2, 9, 3];
const secondSmallest = findSecondSmallest(numbers);
console.log(secondSmallest); 