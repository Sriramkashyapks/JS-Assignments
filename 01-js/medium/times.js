/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    // Get the current time before the computation
    const startTime = new Date().getTime();

    // Calculate the sum from 1 to n
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    // Get the current time after the computation
    const endTime = new Date().getTime();

    // Calculate the time difference in milliseconds
    const elapsedTime = endTime - startTime;

    // Convert milliseconds to seconds and return the time
    return elapsedTime / 1000; // Convert milliseconds to seconds
}

// Test the function
console.log(calculateTime(100)); // 0
console.log(calculateTime(100000)); // 0.003
console.log(calculateTime(1000000000)); // 1.54
