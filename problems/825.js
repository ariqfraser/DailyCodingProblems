// This problem was asked by Google. #825

// Given a sorted list of integers, square the elements and give the output in sorted order.

// For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

const input = [-9, -2, 0, 2, 3];

let output = [];
for (let value of input) {
    output.push(value * value);
}

output = output.sort((a, b) => a - b);
console.log(output);
