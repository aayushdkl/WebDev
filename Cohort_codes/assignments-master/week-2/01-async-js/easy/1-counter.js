let intervalID = setInterval(print, 1000);

let counter = 0;
function print() {
  counter++;
  console.log("The count is", counter);
}

function stop() {
  clearInterval(intervalID);
  console.log("The count is stopped at", counter);
}
