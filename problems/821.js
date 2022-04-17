// This problem was asked by Apple. #821

// A fixed point in an array is an element whose value is equal to its index.
// Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.

// For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False

const inputArray = [-6, 0, 2, 40];

function getFixedPoint(input) {
    for (let i in input) {
        if (input[i] == i) {
            return input[i];
        }
    }
    return false;
}

console.log(getFixedPoint(inputArray));
