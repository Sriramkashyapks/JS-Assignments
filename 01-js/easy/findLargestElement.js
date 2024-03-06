/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    // assuming the first number in array is largest
    let largest = numbers[0];

    // iterating through each element in array
    for(let i=0; i< numbers.length; i++){
        // if the current num is largest replace it by largest
        if(numbers[i] > larger){
            largest = numbers[i];
        }
    }
    return largest;
}

module.exports = findLargestElement;
