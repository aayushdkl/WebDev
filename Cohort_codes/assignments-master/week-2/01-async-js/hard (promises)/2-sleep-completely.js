/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise((resolve) => {
    // Step 1: Get the current time
    let startTime = Date.now();

    // Step 2: Busy wait using a while loop
    while (Date.now() - startTime < milliseconds) {
      // This loop keeps the thread busy and does nothing until the time has passed
    }

    // Step 3: After the loop, resolve the promise
    resolve();
  });
}

module.exports = sleep;
