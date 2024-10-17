function addToDo() {
  const container = document.getElementById("container");

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  const outerDiv = document.createElement("div");
  outerDiv.innerHTML = title;
  container.appendChild(outerDiv);
}
