function buttonFunction() {
  const element = document.getElementById("log");
  element.innerHTML += "pressed<br>";
}

window.onload = function() {
  document.querySelector('button').onclick = buttonFunction;
}
