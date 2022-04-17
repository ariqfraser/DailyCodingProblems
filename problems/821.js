// This problem was asked by Apple. #821

// A fixed point in an array is an element whose value is equal to its index.
// Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.

// For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False.

const fixedArray = [-6, -1, 2, 5, 12, 40];

let randomArray = [];

for (let x = 0; x < 100; x++) {
    randomArray.push(Math.floor(Math.random() * 101));
}
randomArray = randomArray.sort((a, b) => a - b);

let checkedPos0 = false;
let binarySearch = function (start, end, array) {
    if (checkedPos0) return false;
    if (start > end) {
        checkedPos0 = true;
        return binarySearch(0, 1, array);
    }

    const middleIndex = Math.floor((start + end) / 2);
    console.log(start, end, middleIndex, array[middleIndex]);

    if (array[middleIndex] === middleIndex) return array[middleIndex];

    if (array[middleIndex] > middleIndex) {
        return binarySearch(start, middleIndex - 1, array);
    }

    if (array[middleIndex] < middleIndex) {
        return binarySearch(middleIndex + 1, end, array);
    }
};

const input = fixedArray;
console.log('input =>', input);

console.time('time');

console.log('value matches index =>', binarySearch(0, input.length, input));

console.timeEnd('time');
