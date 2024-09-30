let count = 0;
let flag = true;

function print() {
  count++;
  console.log(count);
  if (flag) {
    setTimeout(print, 1000);
  }
}

setTimeout(print, 1000);

function stop() {
  flag = false;
  console.log("Stopped");
}
