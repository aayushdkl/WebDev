console.log("connected");
let timeout;
function debouncePopulateDiv() {
  //Debouncing
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    populateDiv();
  }, 1000);
}
async function populateDiv() {
  const principle = document.getElementById("firstNumber").value;
  const rate = document.getElementById("secondNumber").value;
  const time = document.getElementById("thirdNumber").value;

  const respose = await fetch(
    "https://sum-server.100xdevs.com/interest?principle=" + principle,
    "&rate=" + rate,
    "&time=" + time
  );
  const result = await respose.text();
  console.log(result);
}
