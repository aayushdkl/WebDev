console.log("javascript is running correctly");

async function populateDiv() {
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;
  const element = document.getElementById("finalSum");

  const response = await fetch(
    "https://sum-server.100xdevs.com/sum?a=" +
      firstNumber +
      "&b=" +
      secondNumber
  );
  const ans = await response.text();
  document.getElementById("finalSum").innerHTML = ans;

  //   const sum = parseInt(firstNumber) + parseInt(secondNumber);
  //   element.innerHTML = sum;
}
