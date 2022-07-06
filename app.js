const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let value;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.innerHTML =
      button.innerHTML == "+"
        ? (display.innerHTML += 1)
        : button.innerHTML == "-"
        ? (display.innerHTML -= 1)
        : (display.innerHTML = "");
  });
});
