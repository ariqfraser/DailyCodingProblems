// Daily Coding Problem: Problem #822
// This problem was asked by Snapchat.

// Given a list of possibly overlapping intervals,
// return a new list of intervals where all overlapping intervals have been merged.

// The input list is not necessarily ordered in any way.

// For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].

function sortIntervals(input) {
    const sortedIntervals = input.map((v) => {
        return v.sort((v1, v2) => v1 - v2);
    });
    const byLowestRange = sortedIntervals.sort((a, b) => a[0] - b[0]);
    console.log('Sorted Intervals =>', byLowestRange);
    return byLowestRange;
}

function getMergedIntervalArray(input) {
    const sortedArray = sortIntervals(input);

    const recursiveSweep = function (pos, array) {
        if (pos >= array.length - 1) return array;
        if (array[pos + 1][0] >= array[pos][0]) {
            // starts after pos inteval?
            if (array[pos + 1][0] > array[pos][1]) {
                return recursiveSweep(pos + 1, array);
            }

            // create merged interval
            const intervalStart = array[pos][0],
                intervalEnd =
                    array[pos][1] > array[pos + 1][1]
                        ? array[pos][1]
                        : array[pos + 1][1];

            const newInterval = [intervalStart, intervalEnd];

            // merge new interval
            array.splice(pos, 2, newInterval);
            return recursiveSweep(0, array);
        }
    };

    return recursiveSweep(0, sortedArray);
}

// expected output [1,3], [4,28]
const in2 = [
    [1, 3],
    [8, 5],
    [4, 10],
    [20, 25],
    [21, 8],
    [330, 2],
];

console.log('Merged Interval Overlaps =>', getMergedIntervalArray(in2));
