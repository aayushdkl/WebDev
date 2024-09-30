setInterval(current_time, 1000);

function current_time() {
  let the_time = new Date();
  let hours = addZero(the_time.getHours());
  let minutes = addZero(the_time.getMinutes());
  let seconds = addZero(the_time.getSeconds());

  console.log(`${hours}:${minutes}:${seconds}`);
  console.log(the_time.toLocaleTimeString("en-US"));
}
function addZero(n) {
  return n < 10 ? `0${n}` : n;
}
