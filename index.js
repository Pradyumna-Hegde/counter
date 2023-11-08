// set initial count.
let count = 0;

// select value and buttons.
const value = document.querySelector(".main__count");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const classArray = e.currentTarget.classList;
    if (classArray.contains("decrease")) count--;
    else if (classArray.contains("increase")) count++;
    else count = 0;

    if (count > 0) value.style.color = "green";
    else if (count < 0) value.style.color = "red";
    else value.style.color = "black";
    value.textContent = count;
  });
});
