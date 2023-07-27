// Write a JavaScript program to find the most frequent element in an array and return it. 

function findFrequentElement(arr){
    const elementMap = {};
    let mostElement;
    let maxElement = 0;


    for(const element of arr) {
       elementMap[element] = (elementMap[element] || 0) + 1;
       if(elementMap[element] > maxElement){
        mostElement = element;
        maxElement = elementMap[element];
       }
    }

    return mostElement;
}


const inputArray = [3, 5, 2, 5, 3,5, 5, 5, 5, 3, 1, 4, 5];
const mostFrequent = findFrequentElement(inputArray);
console.log(mostFrequent);