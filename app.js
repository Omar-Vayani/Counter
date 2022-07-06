const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let value = 0;
display.innerHTML = value;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.innerHTML == "+"
      ? (value += 1)
      : button.innerHTML == "-"
      ? value == 0
        ? (value = 0)
        : (value -= 1)
      : (value = 0);
    display.innerHTML = value;
  });
});
