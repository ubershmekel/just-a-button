function buttonFunction() {
  const element = document.getElementById("log");
  element.innerHTML += "pressed<br>";
}

document.querySelector('button').onclick = buttonFunction;
