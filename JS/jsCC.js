const buttons = Array.from(document.querySelectorAll(".button button"));
const body = document.querySelector("body");
buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = "grey";
      body.style.transition = "all 0.5s ease-in-out";
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = "rgb(221, 221, 73)";
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = "rgb(215, 50, 50)";
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = "rgb(60, 60, 219)";
    }
  });
});
const icon = document.querySelector(".svg-icon");
icon.addEventListener("click", () => {
  body.style.backgroundColor = "#121212";
});
